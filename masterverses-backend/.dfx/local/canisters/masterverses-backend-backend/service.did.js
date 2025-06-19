export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'addPicture' : IDL.Func(
        [
          IDL.Text,
          IDL.Vec(IDL.Nat8),
          IDL.Opt(IDL.Text),
          IDL.Opt(IDL.Text),
          IDL.Opt(IDL.Text),
          IDL.Opt(IDL.Text),
        ],
        [IDL.Text],
        [],
      ),
    'getFeaturedEvents' : IDL.Func(
        [],
        [
          IDL.Vec(
            IDL.Record({
              'id' : IDL.Text,
              'date' : IDL.Opt(IDL.Text),
              'name' : IDL.Text,
              'description' : IDL.Opt(IDL.Text),
              'ipfsUrl' : IDL.Opt(IDL.Text),
              'location' : IDL.Opt(IDL.Text),
            })
          ),
        ],
        ['query'],
      ),
    'getNearbyPlaces' : IDL.Func(
        [],
        [
          IDL.Vec(
            IDL.Record({
              'id' : IDL.Text,
              'date' : IDL.Opt(IDL.Text),
              'name' : IDL.Text,
              'description' : IDL.Opt(IDL.Text),
              'price' : IDL.Opt(IDL.Text),
              'ipfsUrl' : IDL.Opt(IDL.Text),
              'location' : IDL.Opt(IDL.Text),
            })
          ),
        ],
        ['query'],
      ),
    'getThreePicsWithDetails' : IDL.Func(
        [],
        [
          IDL.Vec(
            IDL.Record({
              'id' : IDL.Text,
              'date' : IDL.Opt(IDL.Text),
              'description' : IDL.Opt(IDL.Text),
              'image' : IDL.Vec(IDL.Nat8),
              'price' : IDL.Opt(IDL.Text),
              'ipfsUrl' : IDL.Opt(IDL.Text),
              'location' : IDL.Opt(IDL.Text),
            })
          ),
        ],
        ['query'],
      ),
    'getTopOrgs' : IDL.Func(
        [],
        [
          IDL.Vec(
            IDL.Record({ 'name' : IDL.Text, 'ipfsUrl' : IDL.Opt(IDL.Text) })
          ),
        ],
        ['query'],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
