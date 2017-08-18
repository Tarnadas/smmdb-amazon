import amazon from 'amazon-product-api'

import { awsId, awsSecret } from './credentials'

export const searches = {
  US: {
    client: amazon.createClient({
      awsId,
      awsSecret,
      awsTag: 'smmdb09-20'
    }),
    searches: [
      {
        searchIndex: 'VideoGames',
        keywords: 'super mario maker',
        sort: 'salesrank'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'super mario maker',
        sort: 'pmrank'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'super mario maker'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'super mario',
        sort: 'salesrank'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'super mario',
        sort: 'pmrank'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'super mario'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo',
        sort: 'salesrank'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo',
        sort: 'pmrank'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo console',
        sort: 'salesrank'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo console',
        sort: 'pmrank'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo console'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo switch',
        sort: 'salesrank'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo switch',
        sort: 'pmrank'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo switch'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo wii u',
        sort: 'salesrank'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo wii u',
        sort: 'pmrank'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo wii u'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo 3ds',
        sort: 'salesrank'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo 3ds',
        sort: 'pmrank'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo 3ds'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'computer',
        sort: 'salesrank'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'computer',
        sort: 'psrank'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'computer'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'intel',
        sort: 'salesrank'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'intel',
        sort: 'psrank'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'intel'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'nvidia',
        sort: 'salesrank'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'nvidia',
        sort: 'psrank'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'nvidia'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'amd',
        sort: 'salesrank'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'amd',
        sort: 'psrank'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'amd'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'gaming',
        sort: 'salesrank'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'gaming',
        sort: 'psrank'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'gaming'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'hard drive',
        sort: 'salesrank'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'hard drive',
        sort: 'psrank'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'hard drive'
      },
      {
        searchIndex: 'Wireless',
        keywords: 'mobile phone',
        sort: 'salesrank'
      },
      {
        searchIndex: 'Wireless',
        keywords: 'mobile phone',
        sort: 'reviewrank'
      },
      {
        searchIndex: 'Wireless',
        keywords: 'mobile phone'
      },
      {
        searchIndex: 'Wireless',
        keywords: 'samsung',
        sort: 'salesrank'
      },
      {
        searchIndex: 'Wireless',
        keywords: 'samsung',
        sort: 'reviewrank'
      },
      {
        searchIndex: 'Wireless',
        keywords: 'samsung'
      },
      {
        searchIndex: 'Wireless',
        keywords: 'apple',
        sort: 'salesrank'
      },
      {
        searchIndex: 'Wireless',
        keywords: 'apple',
        sort: 'reviewrank'
      },
      {
        searchIndex: 'Wireless',
        keywords: 'apple'
      },
      {
        searchIndex: 'Wireless',
        keywords: 'google',
        sort: 'salesrank'
      },
      {
        searchIndex: 'Wireless',
        keywords: 'google',
        sort: 'reviewrank'
      },
      {
        searchIndex: 'Wireless',
        keywords: 'google'
      }
    ]
  },
  DE: {
    client: amazon.createClient({
      awsId,
      awsSecret,
      awsTag: 'smmdb00-21'
    }),
    domain: 'webservices.amazon.de',
    searches: [
      {
        searchIndex: 'VideoGames',
        keywords: 'super mario maker',
        sort: 'salesrank'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'super mario maker',
        sort: 'salesrank',
        itemPage: '2'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'super mario maker'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'super mario maker',
        itemPage: '2'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'super mario',
        sort: 'salesrank'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'super mario',
        sort: 'salesrank',
        itemPage: '2'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'super mario'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'super mario',
        itemPage: '2'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo',
        sort: 'salesrank'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo',
        sort: 'salesrank',
        itemPage: '2'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo',
        itemPage: '2'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo console',
        sort: 'salesrank'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo console',
        sort: 'salesrank',
        itemPage: '2'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo console'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo console',
        itemPage: '2'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo switch',
        sort: 'salesrank'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo switch',
        sort: 'salesrank',
        itemPage: '2'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo switch'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo switch',
        itemPage: '2'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo wii u',
        sort: 'salesrank'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo wii u',
        sort: 'salesrank',
        itemPage: '2'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo wii u'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo wii u',
        itemPage: '2'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo 3ds',
        sort: 'salesrank'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo 3ds',
        sort: 'salesrank',
        itemPage: '2'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo 3ds'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo 3ds',
        itemPage: '2'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'computer',
        sort: 'salesrank'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'computer',
        sort: 'salesrank',
        itemPage: '2'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'computer',
        sort: 'psrank'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'computer'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'intel',
        sort: 'salesrank'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'intel',
        sort: 'salesrank',
        itemPage: '2'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'intel',
        sort: 'psrank'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'intel'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'nvidia',
        sort: 'salesrank'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'nvidia',
        sort: 'salesrank',
        itemPage: '2'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'nvidia',
        sort: 'psrank'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'nvidia'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'amd',
        sort: 'salesrank'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'amd',
        sort: 'salesrank',
        itemPage: '2'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'amd',
        sort: 'psrank'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'amd'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'gaming',
        sort: 'salesrank'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'gaming',
        sort: 'salesrank',
        itemPage: '2'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'gaming',
        sort: 'psrank'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'gaming'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'hard drive',
        sort: 'salesrank'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'hard drive',
        sort: 'salesrank',
        itemPage: '2'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'hard drive',
        sort: 'psrank'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'hard drive'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'mobile phone',
        sort: 'salesrank'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'mobile phone',
        sort: 'salesrank',
        itemPage: '2'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'mobile phone'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'mobile phone',
        itemPage: '2'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'samsung',
        sort: 'salesrank'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'samsung',
        sort: 'salesrank',
        itemPage: '2'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'samsung'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'samsung',
        itemPage: '2'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'apple',
        sort: 'salesrank'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'apple',
        sort: 'salesrank',
        itemPage: '2'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'apple'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'apple',
        itemPage: '2'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'google',
        sort: 'salesrank'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'google',
        sort: 'salesrank',
        itemPage: '2'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'google'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'google',
        itemPage: '2'
      }
    ]
  },
  CA: {
    client: amazon.createClient({
      awsId,
      awsSecret,
      awsTag: 'smmdb0a-20'
    }),
    domain: 'webservices.amazon.ca',
    searches: [
      {
        searchIndex: 'VideoGames',
        keywords: 'super mario maker',
        sort: 'salesrank'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'super mario maker',
        sort: 'salesrank',
        itemPage: '2'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'super mario maker'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'super mario',
        sort: 'salesrank'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'super mario',
        sort: 'salesrank',
        itemPage: '2'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'super mario'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo',
        sort: 'salesrank'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo',
        sort: 'salesrank',
        itemPage: '2'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo console',
        sort: 'salesrank'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo console',
        sort: 'salesrank',
        itemPage: '2'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo console'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo switch',
        sort: 'salesrank'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo switch',
        sort: 'salesrank',
        itemPage: '2'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo switch'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo wii u',
        sort: 'salesrank'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo wii u',
        sort: 'salesrank',
        itemPage: '2'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo wii u'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo 3ds',
        sort: 'salesrank'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo 3ds',
        sort: 'salesrank',
        itemPage: '2'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo 3ds'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'computer',
        sort: 'salesrank'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'computer',
        sort: 'salesrank',
        itemPage: '2'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'computer'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'intel',
        sort: 'salesrank'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'intel',
        sort: 'salesrank',
        itemPage: '2'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'intel'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'nvidia',
        sort: 'salesrank'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'nvidia',
        sort: 'salesrank',
        itemPage: '2'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'nvidia'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'amd',
        sort: 'salesrank'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'amd',
        sort: 'salesrank',
        itemPage: '2'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'amd'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'gaming',
        sort: 'salesrank'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'gaming',
        sort: 'salesrank',
        itemPage: '2'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'gaming'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'hard drive',
        sort: 'salesrank'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'hard drive',
        sort: 'salesrank',
        itemPage: '2'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'hard drive'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'mobile phone',
        sort: 'salesrank'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'mobile phone',
        sort: 'salesrank',
        itemPage: '2'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'mobile phone'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'samsung',
        sort: 'salesrank'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'samsung',
        sort: 'salesrank',
        itemPage: '2'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'samsung'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'apple',
        sort: 'salesrank'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'apple',
        sort: 'salesrank',
        itemPage: '2'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'apple'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'google',
        sort: 'salesrank'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'google',
        sort: 'salesrank',
        itemPage: '2'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'google'
      }
    ]
  },
  IT: {
    client: amazon.createClient({
      awsId,
      awsSecret,
      awsTag: 'smmdb-21'
    }),
    domain: 'webservices.amazon.it',
    searches: [
      {
        searchIndex: 'VideoGames',
        keywords: 'super mario maker',
        sort: 'salesrank'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'super mario maker'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'super mario',
        sort: 'salesrank'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'super mario'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo',
        sort: 'salesrank'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo console',
        sort: 'salesrank'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo console'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo switch',
        sort: 'salesrank'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo switch'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo wii u',
        sort: 'salesrank'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo wii u'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo 3ds',
        sort: 'salesrank'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo 3ds'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'computer',
        sort: 'salesrank'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'computer'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'intel',
        sort: 'salesrank'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'intel'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'nvidia',
        sort: 'salesrank'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'nvidia'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'amd',
        sort: 'salesrank'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'amd'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'gaming',
        sort: 'salesrank'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'gaming'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'hard drive',
        sort: 'salesrank'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'hard drive'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'mobile phone',
        sort: 'salesrank'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'mobile phone'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'samsung',
        sort: 'salesrank'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'samsung'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'apple',
        sort: 'salesrank'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'apple'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'google',
        sort: 'salesrank'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'google'
      }
    ]
  },
  ES: {
    client: amazon.createClient({
      awsId,
      awsSecret,
      awsTag: 'smmdb05-21'
    }),
    domain: 'webservices.amazon.es',
    searches: [
      {
        searchIndex: 'VideoGames',
        keywords: 'super mario maker',
        sort: 'salesrank'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'super mario maker'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'super mario',
        sort: 'salesrank'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'super mario'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo',
        sort: 'salesrank'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo console',
        sort: 'salesrank'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo console'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo switch',
        sort: 'salesrank'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo switch'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo wii u',
        sort: 'salesrank'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo wii u'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo 3ds',
        sort: 'salesrank'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo 3ds'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'computer',
        sort: 'popularityrank'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'computer'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'intel',
        sort: 'popularityrank'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'intel'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'nvidia',
        sort: 'popularityrank'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'nvidia'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'amd',
        sort: 'popularityrank'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'amd'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'gaming',
        sort: 'popularityrank'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'gaming'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'hard drive',
        sort: 'popularityrank'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'hard drive'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'mobile phone',
        sort: 'salesrank'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'mobile phone'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'samsung',
        sort: 'salesrank'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'samsung'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'apple',
        sort: 'salesrank'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'apple'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'google',
        sort: 'salesrank'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'google'
      }
    ]
  },
  UK: {
    client: amazon.createClient({
      awsId,
      awsSecret,
      awsTag: 'smmdb0f-21'
    }),
    domain: 'webservices.amazon.co.uk',
    searches: [
      {
        searchIndex: 'VideoGames',
        keywords: 'super mario maker',
        sort: 'salesrank'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'super mario maker',
        sort: 'reviewrank'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'super mario maker'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'super mario',
        sort: 'salesrank'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'super mario',
        sort: 'reviewrank'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'super mario'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo',
        sort: 'salesrank'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo',
        sort: 'reviewrank'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo console',
        sort: 'salesrank'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo console',
        sort: 'reviewrank'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo console'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo switch',
        sort: 'salesrank'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo switch',
        sort: 'reviewrank'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo switch'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo wii u',
        sort: 'salesrank'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo wii u',
        sort: 'reviewrank'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo wii u'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo 3ds',
        sort: 'salesrank'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo 3ds',
        sort: 'reviewrank'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo 3ds'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'computer',
        sort: 'salesrank'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'computer',
        sort: 'reviewrank'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'computer'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'intel',
        sort: 'salesrank'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'intel',
        sort: 'reviewrank'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'intel'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'nvidia',
        sort: 'salesrank'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'nvidia',
        sort: 'reviewrank'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'nvidia'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'amd',
        sort: 'salesrank'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'amd',
        sort: 'reviewrank'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'amd'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'gaming',
        sort: 'salesrank'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'gaming',
        sort: 'reviewrank'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'gaming'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'hard drive',
        sort: 'salesrank'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'hard drive',
        sort: 'reviewrank'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'hard drive'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'mobile phone',
        sort: 'salesrank'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'mobile phone',
        sort: 'reviewrank'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'mobile phone'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'samsung',
        sort: 'salesrank'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'samsung',
        sort: 'reviewrank'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'samsung'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'apple',
        sort: 'salesrank'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'apple',
        sort: 'reviewrank'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'apple'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'google',
        sort: 'salesrank'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'google',
        sort: 'reviewrank'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'google'
      }
    ]
  },
  FR: {
    client: amazon.createClient({
      awsId,
      awsSecret,
      awsTag: 'smmdb036-21'
    }),
    domain: 'webservices.amazon.fr',
    searches: [
      {
        searchIndex: 'VideoGames',
        keywords: 'super mario maker',
        sort: 'salesrank'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'super mario maker'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'super mario',
        sort: 'salesrank'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'super mario'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo',
        sort: 'salesrank'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo console',
        sort: 'salesrank'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo console'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo switch',
        sort: 'salesrank'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo switch'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo wii u',
        sort: 'salesrank'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo wii u'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo 3ds',
        sort: 'salesrank'
      },
      {
        searchIndex: 'VideoGames',
        keywords: 'nintendo 3ds'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'computer',
        sort: 'salesrank'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'computer'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'intel',
        sort: 'salesrank'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'intel'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'nvidia',
        sort: 'salesrank'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'nvidia'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'amd',
        sort: 'salesrank'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'amd'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'gaming',
        sort: 'salesrank'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'gaming'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'hard drive',
        sort: 'salesrank'
      },
      {
        searchIndex: 'PCHardware',
        keywords: 'hard drive'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'mobile phone',
        sort: 'salesrank'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'mobile phone'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'samsung',
        sort: 'salesrank'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'samsung'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'apple',
        sort: 'salesrank'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'apple'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'google',
        sort: 'salesrank'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'google'
      }
    ]
  }
}