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
        searchIndex: 'Wireless',
        keywords: 'mobile phone',
        sort: 'salesrank'
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
        keywords: 'samsung'
      },
      {
        searchIndex: 'Wireless',
        keywords: 'apple',
        sort: 'salesrank'
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
        searchIndex: 'Electronics',
        keywords: 'computer',
        sort: 'salesrank'
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
        keywords: 'intel'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'nvidia',
        sort: 'salesrank'
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
        keywords: 'amd'
      },
      {
        searchIndex: 'Electronics',
        keywords: 'gaming',
        sort: 'salesrank'
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