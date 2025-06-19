const idlFactory = ({ IDL }) => {
    return IDL.Service({
        'getThreePics': IDL.Func(
            [],
            [IDL.Vec(IDL.Record({
                'id': IDL.Text,
                'image': IDL.Vec(IDL.Nat8)
            }))],
            ['query']
        ),
        'getThreePicsWithDetails': IDL.Func(
            [],
            [IDL.Vec(IDL.Record({
                'id': IDL.Text,
                'image': IDL.Vec(IDL.Nat8),
                'ipfsUrl': IDL.Opt(IDL.Text),
                'description': IDL.Opt(IDL.Text),
                'date': IDL.Opt(IDL.Text),
                'location': IDL.Opt(IDL.Text),
                'price': IDL.Opt(IDL.Text)
            }))],
            ['query']
        ),
        'getTopOrgs': IDL.Func(
          [],
          [IDL.Vec(IDL.Record({
              'name': IDL.Text,
              'ipfsUrl': IDL.Opt(IDL.Text)
          }))],
          ['query']
      ),
      'getNearbyPlaces': IDL.Func(
        [],
        [IDL.Vec(IDL.Record({
            'id': IDL.Text,
            'ipfsUrl': IDL.Opt(IDL.Text),
            'name': IDL.Text,
            'description': IDL.Opt(IDL.Text),
            'date': IDL.Opt(IDL.Text),
            'location': IDL.Opt(IDL.Text),
            'price': IDL.Opt(IDL.Text)
        }))],
        ['query']
    ),
        'getFeaturedEvents': IDL.Func(
          [],
          [IDL.Vec(IDL.Record({
              'id': IDL.Text,
              'ipfsUrl': IDL.Opt(IDL.Text),
              'name': IDL.Text,
              'date': IDL.Opt(IDL.Text),
              'location': IDL.Opt(IDL.Text),
              'description': IDL.Opt(IDL.Text)
          }))],
          ['query']
      )
    });
  };
  
  module.exports = { idlFactory };