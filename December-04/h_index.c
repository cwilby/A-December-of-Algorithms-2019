int h_index(int n, int citations[])
{
  int i, j, i_peers, peers = 0, h = 0;

  for(i = 0; i < n; i++) {
    i_peers = 1;
    if(citations[i] > peers) {
      for(j = 0; j < n; j++) {
        if (i != j && citations[j] >= citations[i]) {
          i_peers++;
        }
      }
      if (i_peers > peers) {
        h = citations[i];
        peers = i_peers;
      }
    }
  }

  return h;
}