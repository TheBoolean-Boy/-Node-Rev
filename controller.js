


export const usernameController = (req, res) => {
  const userName = req.params.username;
  res.send(`This is the Profile Page for ${userName}`);
}

export const searchController = (req, res) => {
  const keyword = req.query.keyword;
  res.send(`Searching for ${keyword}`);
}