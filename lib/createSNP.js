var chromosomes = ["X","Y","MT"];

module.exports = function(split, provider) {
  var snp;

  if (provider === '23andme') {
    snp = {
      id: split[0],
      c: split[1],
      pos: parseInt(split[2], 10),
      g: split[3]
    };

    if (snp.g === '--') {
      snp.g = null;
    }

    if (chromosomes.indexOf(snp.c) === -1) {
      snp.c = parseInt(snp.c, 10);
    }
    return snp;
  }

  if (provider === 'ancestry') {
    if (split[0] === 'rsid') return; // ignore csv head

    snp = {
      id: split[0],
      c: split[1],
      pos: parseInt(split[2], 10),
      g: ''
    };

    if (split[3] !== '0') snp.g += split[3];
    if (split[4] !== '0') snp.g += split[4];

    if (snp.g === '') {
      snp.g = null;
    }

    if (chromosomes.indexOf(snp.c) === -1) {
      snp.c = parseInt(snp.c, 10);
    }
    return snp;
  }


};