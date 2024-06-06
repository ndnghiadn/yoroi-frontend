// @flow
import { HistoryItemStatus, HistoryItemType } from '../useCases/TokenDetails/TransactionTable';
import { createChartData, getRandomTime, now, start1WeekAgo, start24HoursAgo } from './helpers/mockHelper';

// ALL THE MOCK DATA FOR RENDERING UI NEW
const mockData = {
  common: {
    walletBalance: {
      ada: (100000 * Math.random()).toFixed(2),
      usd: (1000 * Math.random()).toFixed(2),
      percents: Math.random().toFixed(2),
      amount: Math.random().toFixed(2),
    },
    dappsBalance: {
      ada: (100000 * Math.random()).toFixed(2),
      usd: (1000 * Math.random()).toFixed(2),
      percents: Math.random().toFixed(2),
      amount: Math.random().toFixed(2),
    },
  },

  wallet: {
    tokenList: [
      {
        name: 'AGIX',
        id: 'Agix',
        price: (10 * Math.random()).toFixed(2),
        portfolioPercents: Math.round(100 * Math.random()),
        '24h': -(10 * Math.random()).toFixed(2),
        '1W': (10 * Math.random()).toFixed(2),
        '1M': (10 * Math.random()).toFixed(2),
        totalAmount: (100000 * Math.random()).toFixed(3),
        totalAmountUsd: (100000 * Math.random()).toFixed(3),
        overview: {
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
          website: 'https://www.cardano.org',
          detailOn: 'https://www.yoroiwallet.com',
          policyId: '2aa9c1557fcf8e7caa049fa0911a8724a1cdaf8037fe0b431c6ac664',
          fingerprint:
            'asset311q8dhlxmgagkx0ldt4xc7wzdv2wza8gu2utxw294sr23zuc8dhlxmgagkx0ldt4xc7wzk8213yjnad98h1n1j99naskajsj6789',
        },
        performance: [
          { value: Math.random().toFixed(3) },
          { value: Math.random().toFixed(2) },
          { value: `${Math.round(1000 * Math.random())}M` },
          { value: `${Math.round(100 * Math.random())}M` },
          { value: `${Math.round(100 * Math.random())}` },
          { value: (1000 * Math.random()).toFixed(2) },
          { value: (1000 * Math.random()).toFixed(2) },
          { value: null },
          { value: (10 * Math.random()).toFixed(2) },
          { value: (Math.random() / 100).toFixed(5) },
        ],
        chartData: {
          start24HoursAgo: createChartData('24H'),
          start1WeekAgo: createChartData('1W'),
          start1MonthAgo: createChartData('1M'),
          start6MonthAgo: createChartData('6M'),
          start1YearAgo: createChartData('1Y'),
          ALL: createChartData('1Y'),
        },
      },
      {
        name: 'DOGE',
        id: 'Doge',
        price: (10 * Math.random()).toFixed(2),
        portfolioPercents: Math.round(100 * Math.random()),
        '24h': -(10 * Math.random()).toFixed(2),
        '1W': (10 * Math.random()).toFixed(2),
        '1M': -(10 * Math.random()).toFixed(2),
        totalAmount: Math.round(100000 * Math.random()).toFixed(2),
        totalAmountUsd: Math.round(100000 * Math.random()).toFixed(2),
        overview: {
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
          website: 'https://www.cardano.org',
          detailOn: 'https://www.yoroiwallet.com',
          policyId: '2aa9c1557fcf8e7caa049fa0911a8724a1cdaf8037fe0b431c6ac664',
          fingerprint:
            'asset322q8dhlxmgagkx0ldt4xc7wzdv2wza8gu2utxw294sr23zuc8dhlxmgagkx0ldt4xc7wzk8213yjnad98h1n1j99naskajsj3456',
        },
        performance: [
          { value: Math.random().toFixed(3) },
          { value: Math.random().toFixed(2) },
          { value: `${Math.round(1000 * Math.random())}M` },
          { value: null },
          { value: `${Math.round(100 * Math.random())}` },
          { value: (100 * Math.random()).toFixed(2) },
          { value: (1000 * Math.random()).toFixed(2) },
          { value: null },
          { value: (10 * Math.random()).toFixed(2) },
          { value: (Math.random() / 100).toFixed(5) },
        ],
        chartData: {
          start24HoursAgo: createChartData('24H'),
          start1WeekAgo: createChartData('1W'),
          start1MonthAgo: createChartData('1M'),
          start6MonthAgo: createChartData('6M'),
          start1YearAgo: createChartData('1Y'),
          ALL: createChartData('1Y'),
        },
      },
      {
        name: 'ADA',
        id: 'Cardano',
        price: (10 * Math.random()).toFixed(2),
        portfolioPercents: Math.round(100 * Math.random()),
        '24h': (10 * Math.random()).toFixed(2),
        '1W': -(10 * Math.random()).toFixed(2),
        '1M': (10 * Math.random()).toFixed(2),
        totalAmount: Math.round(100000 * Math.random()).toFixed(2),
        totalAmountUsd: Math.round(100000 * Math.random()).toFixed(2),
        overview: {
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
          website: 'https://www.cardano.org',
          detailOn: 'https://www.yoroiwallet.com',
          policyId: '2aa9c1557fcf8e7caa049fa0911a8724a1cdaf8037fe0b431c6ac664',
          fingerprint:
            'asset333q8dhlxmgagkx0ldt4xc7wzdv2wza8gu2utxw294sr23zuc8dhlxmgagkx0ldt4xc7wzk8213yjnad98h1n1j99naskajsj1234',
        },
        performance: [
          { value: Math.random().toFixed(3) },
          { value: Math.random().toFixed(2) },
          { value: `${Math.round(1000 * Math.random())}M` },
          { value: `${Math.round(100 * Math.random())}M` },
          { value: `${Math.round(100 * Math.random())}` },
          { value: (100 * Math.random()).toFixed(2) },
          { value: (1000 * Math.random()).toFixed(2) },
          { value: '45B' },
          { value: (10 * Math.random()).toFixed(2) },
          { value: (Math.random() / 100).toFixed(5) },
        ],
        chartData: {
          start24HoursAgo: createChartData('24H'),
          start1WeekAgo: createChartData('1W'),
          start1MonthAgo: createChartData('1M'),
          start6MonthAgo: createChartData('6M'),
          start1YearAgo: createChartData('1Y'),
          ALL: createChartData('1Y'),
        },
      },
      {
        name: 'Shiba',
        id: 'shiba',
        price: (10 * Math.random()).toFixed(2),
        portfolioPercents: Math.round(100 * Math.random()),
        '24h': -(10 * Math.random()).toFixed(2),
        '1W': -(10 * Math.random()).toFixed(2),
        '1M': (10 * Math.random()).toFixed(2),
        totalAmount: Math.round(100000 * Math.random()).toFixed(2),
        totalAmountUsd: Math.round(100000 * Math.random()).toFixed(2),
        overview: {
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
          website: 'https://www.cardano.org',
          detailOn: 'https://www.yoroiwallet.com',
          policyId: '2aa9c1557fcf8e7caa049fa0911a8724a1cdaf8037fe0b431c6ac664',
          fingerprint:
            'asset344q8dhlxmgagkx0ldt4xc7wzdv2wza8gu2utxw294sr23zuc8dhlxmgagkx0ldt4xc7wzk8213yjnad98h1n1j99naskajsj3456',
        },
        performance: [
          { value: Math.random().toFixed(3) },
          { value: Math.random().toFixed(2) },
          { value: `${Math.round(1000 * Math.random())}M` },
          { value: `${Math.round(100 * Math.random())}M` },
          { value: `${Math.round(100 * Math.random())}` },
          { value: (100 * Math.random()).toFixed(2) },
          { value: (1000 * Math.random()).toFixed(2) },
          { value: (1000 * Math.random()).toFixed(2) },
          { value: (10 * Math.random()).toFixed(2) },
          { value: (Math.random() / 100).toFixed(5) },
        ],
        chartData: {
          start24HoursAgo: createChartData('24H'),
          start1WeekAgo: createChartData('1W'),
          start1MonthAgo: createChartData('1M'),
          start6MonthAgo: createChartData('6M'),
          start1YearAgo: createChartData('1Y'),
          ALL: createChartData('1Y'),
        },
      },
      {
        name: 'ALT',
        id: 'alt',
        price: (10 * Math.random()).toFixed(2),
        portfolioPercents: Math.round(100 * Math.random()),
        '24h': -(10 * Math.random()).toFixed(2),
        '1W': (10 * Math.random()).toFixed(2),
        '1M': -(10 * Math.random()).toFixed(2),
        totalAmount: Math.round(100000 * Math.random()).toFixed(2),
        totalAmountUsd: Math.round(100000 * Math.random()).toFixed(2),
        overview: {
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
          website: 'https://www.cardano.org',
          detailOn: 'https://www.yoroiwallet.com',
          policyId: '2aa9c1557fcf8e7caa049fa0911a8724a1cdaf8037fe0b431c6ac664',
          fingerprint:
            'asset355q8dhlxmgagkx0ldt4xc7wzdv2wza8gu2utxw294sr23zuc8dhlxmgagkx0ldt4xc7wzk8213yjnad98h1n1j99naskajsj3456',
        },
        performance: [
          { value: Math.random().toFixed(3) },
          { value: Math.random().toFixed(2) },
          { value: `${Math.round(1000 * Math.random())}M` },
          { value: `${Math.round(100 * Math.random())}M` },
          { value: `${Math.round(100 * Math.random())}` },
          { value: (100 * Math.random()).toFixed(2) },
          { value: (1000 * Math.random()).toFixed(2) },
          { value: (1000 * Math.random()).toFixed(2) },
          { value: (10 * Math.random()).toFixed(2) },
          { value: (Math.random() / 100).toFixed(5) },
        ],
        chartData: {
          start24HoursAgo: createChartData('24H'),
          start1WeekAgo: createChartData('1W'),
          start1MonthAgo: createChartData('1M'),
          start6MonthAgo: createChartData('6M'),
          start1YearAgo: createChartData('1Y'),
          ALL: createChartData('1Y'),
        },
      },
      {
        name: 'TKN1',
        id: 'Tkn1',
        price: (10 * Math.random()).toFixed(2),
        portfolioPercents: Math.round(100 * Math.random()),
        '24h': (10 * Math.random()).toFixed(2),
        '1W': (10 * Math.random()).toFixed(2),
        '1M': (10 * Math.random()).toFixed(2),
        totalAmount: Math.round(100000 * Math.random()).toFixed(2),
        totalAmountUsd: Math.round(100000 * Math.random()).toFixed(2),
        overview: {
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
          website: 'https://www.cardano.org',
          detailOn: 'https://www.yoroiwallet.com',
          policyId: '2aa9c1557fcf8e7caa049fa0911a8724a1cdaf8037fe0b431c6ac664',
          fingerprint:
            'asset366q8dhlxmgagkx0ldt4xc7wzdv2wza8gu2utxw294sr23zuc8dhlxmgagkx0ldt4xc7wzk8213yjnad98h1n1j99naskajsj3456',
        },
        performance: [
          { value: Math.random().toFixed(3) },
          { value: Math.random().toFixed(2) },
          { value: `${Math.round(1000 * Math.random())}M` },
          { value: `${Math.round(100 * Math.random())}M` },
          { value: `${Math.round(100 * Math.random())}` },
          { value: (100 * Math.random()).toFixed(2) },
          { value: (1000 * Math.random()).toFixed(2) },
          { value: (1000 * Math.random()).toFixed(2) },
          { value: (10 * Math.random()).toFixed(2) },
          { value: (Math.random() / 100).toFixed(5) },
        ],
        chartData: {
          start24HoursAgo: createChartData('24H'),
          start1WeekAgo: createChartData('1W'),
          start1MonthAgo: createChartData('1M'),
          start6MonthAgo: createChartData('6M'),
          start1YearAgo: createChartData('1Y'),
          ALL: createChartData('1Y'),
        },
      },
      {
        name: 'TKN2',
        id: 'Tkn2',
        price: (10 * Math.random()).toFixed(2),
        portfolioPercents: Math.round(100 * Math.random()),
        '24h': -(10 * Math.random()).toFixed(2),
        '1W': -(10 * Math.random()).toFixed(2),
        '1M': -(10 * Math.random()).toFixed(2),
        totalAmount: Math.round(100000 * Math.random()).toFixed(2),
        totalAmountUsd: Math.round(100000 * Math.random()).toFixed(2),
        overview: {
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
          website: 'https://www.cardano.org',
          detailOn: 'https://www.yoroiwallet.com',
          policyId: '2aa9c1557fcf8e7caa049fa0911a8724a1cdaf8037fe0b431c6ac664',
          fingerprint:
            'asset377q8dhlxmgagkx0ldt4xc7wzdv2wza8gu2utxw294sr23zuc8dhlxmgagkx0ldt4xc7wzk8213yjnad98h1n1j99naskajsj3456',
        },
        performance: [
          { value: Math.random().toFixed(3) },
          { value: Math.random().toFixed(2) },
          { value: `${Math.round(1000 * Math.random())}M` },
          { value: `${Math.round(100 * Math.random())}M` },
          { value: `${Math.round(100 * Math.random())}` },
          { value: (100 * Math.random()).toFixed(2) },
          { value: (1000 * Math.random()).toFixed(2) },
          { value: (1000 * Math.random()).toFixed(2) },
          { value: (10 * Math.random()).toFixed(2) },
          { value: (Math.random() / 100).toFixed(5) },
        ],
        chartData: {
          start24HoursAgo: createChartData('24H'),
          start1WeekAgo: createChartData('1W'),
          start1MonthAgo: createChartData('1M'),
          start6MonthAgo: createChartData('6M'),
          start1YearAgo: createChartData('1Y'),
          ALL: createChartData('1Y'),
        },
      },
      {
        name: 'TKN3',
        id: 'Tkn3',
        price: (10 * Math.random()).toFixed(2),
        portfolioPercents: Math.round(100 * Math.random()),
        '24h': -(10 * Math.random()).toFixed(2),
        '1W': (10 * Math.random()).toFixed(2),
        '1M': -(10 * Math.random()).toFixed(2),
        totalAmount: Math.round(100000 * Math.random()).toFixed(2),
        totalAmountUsd: Math.round(100000 * Math.random()).toFixed(2),
        overview: {
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
          website: 'https://www.cardano.org',
          detailOn: 'https://www.yoroiwallet.com',
          policyId: '2aa9c1557fcf8e7caa049fa0911a8724a1cdaf8037fe0b431c6ac664',
          fingerprint:
            'asset388q8dhlxmgagkx0ldt4xc7wzdv2wza8gu2utxw294sr23zuc8dhlxmgagkx0ldt4xc7wzk8213yjnad98h1n1j99naskajsj3456',
        },
        performance: [
          { value: Math.random().toFixed(3) },
          { value: Math.random().toFixed(2) },
          { value: `${Math.round(1000 * Math.random())}M` },
          { value: `${Math.round(100 * Math.random())}M` },
          { value: `${Math.round(100 * Math.random())}` },
          { value: (100 * Math.random()).toFixed(2) },
          { value: (1000 * Math.random()).toFixed(2) },
          { value: (1000 * Math.random()).toFixed(2) },
          { value: (10 * Math.random()).toFixed(2) },
          { value: (Math.random() / 100).toFixed(5) },
        ],
        chartData: {
          start24HoursAgo: createChartData('24H'),
          start1WeekAgo: createChartData('1W'),
          start1MonthAgo: createChartData('1M'),
          start6MonthAgo: createChartData('6M'),
          start1YearAgo: createChartData('1Y'),
          ALL: createChartData('1Y'),
        },
      },
      {
        name: 'TKN6',
        id: 'Tkn6',
        price: (10 * Math.random()).toFixed(2),
        portfolioPercents: Math.round(100 * Math.random()),
        '24h': (10 * Math.random()).toFixed(2),
        '1W': (10 * Math.random()).toFixed(2),
        '1M': (10 * Math.random()).toFixed(2),
        totalAmount: Math.round(100000 * Math.random()).toFixed(2),
        totalAmountUsd: Math.round(100000 * Math.random()).toFixed(2),
        overview: {
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
          website: 'https://www.cardano.org',
          detailOn: 'https://www.yoroiwallet.com',
          policyId: '2aa9c1557fcf8e7caa049fa0911a8724a1cdaf8037fe0b431c6ac664',
          fingerprint:
            'asset399q8dhlxmgagkx0ldt4xc7wzdv2wza8gu2utxw294sr23zuc8dhlxmgagkx0ldt4xc7wzk8213yjnad98h1n1j99naskajsj3456',
        },
        performance: [
          { value: Math.random().toFixed(3) },
          { value: Math.random().toFixed(2) },
          { value: `${Math.round(1000 * Math.random())}M` },
          { value: `${Math.round(100 * Math.random())}M` },
          { value: `${Math.round(100 * Math.random())}` },
          { value: (100 * Math.random()).toFixed(2) },
          { value: (1000 * Math.random()).toFixed(2) },
          { value: (1000 * Math.random()).toFixed(2) },
          { value: (10 * Math.random()).toFixed(2) },
          { value: (Math.random() / 100).toFixed(5) },
        ],
        chartData: {
          start24HoursAgo: createChartData('24H'),
          start1WeekAgo: createChartData('1W'),
          start1MonthAgo: createChartData('1M'),
          start6MonthAgo: createChartData('6M'),
          start1YearAgo: createChartData('1Y'),
          ALL: createChartData('1Y'),
        },
      },
      {
        name: 'TKN8',
        id: 'Tkn8',
        price: (10 * Math.random()).toFixed(2),
        portfolioPercents: Math.round(100 * Math.random()),
        '24h': (10 * Math.random()).toFixed(2),
        '1W': (10 * Math.random()).toFixed(2),
        '1M': -(10 * Math.random()).toFixed(2),
        totalAmount: Math.round(100000 * Math.random()).toFixed(2),
        totalAmountUsd: Math.round(100000 * Math.random()).toFixed(2),
        overview: {
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
          website: 'https://www.cardano.org',
          detailOn: 'https://www.yoroiwallet.com',
          policyId: '2aa9c1557fcf8e7caa049fa0911a8724a1cdaf8037fe0b431c6ac664',
          fingerprint:
            'asset400q8dhlxmgagkx0ldt4xc7wzdv2wza8gu2utxw294sr23zuc8dhlxmgagkx0ldt4xc7wzk8213yjnad98h1n1j99naskajsj3456',
        },
        performance: [
          { value: Math.random().toFixed(3) },
          { value: Math.random().toFixed(2) },
          { value: `${Math.round(1000 * Math.random())}M` },
          { value: `${Math.round(100 * Math.random())}M` },
          { value: `${Math.round(100 * Math.random())}` },
          { value: (100 * Math.random()).toFixed(2) },
          { value: (1000 * Math.random()).toFixed(2) },
          { value: (1000 * Math.random()).toFixed(2) },
          { value: (10 * Math.random()).toFixed(2) },
          { value: (Math.random() / 100).toFixed(5) },
        ],
        chartData: {
          start24HoursAgo: createChartData('24H'),
          start1WeekAgo: createChartData('1W'),
          start1MonthAgo: createChartData('1M'),
          start6MonthAgo: createChartData('6M'),
          start1YearAgo: createChartData('1Y'),
          ALL: createChartData('1Y'),
        },
      },
    ],
  },

  dapps: {
    liquidityList: [
      {
        id: Math.random(),
        tokenPair: 'ADA/HOSKY',
        DEX: 'Minswap',
        DEXLink: 'https://app.minswap.org/',
        firstToken: {
          name: 'ADA',
          id: 'ada',
        },
        secondToken: {
          name: 'HOSKY',
          id: 'hosky',
        },
        lpTokens: (Math.random() * 1000000).toFixed(2),
        totalValue: (Math.random() * 1000).toFixed(2),
        totalValueUsd: (Math.random() * 100).toFixed(2),
        firstTokenValue: (Math.random() * 100).toFixed(2),
        firstTokenValueUsd: (Math.random() * 100).toFixed(2),
        secondTokenValue: (Math.random() * 10000).toFixed(2),
        secondTokenValueUsd: (Math.random() * 10).toFixed(2),
      },
      {
        id: Math.random(),
        tokenPair: 'DOGE/Shiba',
        DEX: 'Sundaeswap',
        DEXLink: 'https://v2.sundaeswap.finance/',
        firstToken: {
          name: 'DOGE',
          id: 'doge',
        },
        secondToken: {
          name: 'Shiba',
          id: 'shiba',
        },
        lpTokens: (Math.random() * 1000000).toFixed(2),
        totalValue: (Math.random() * 1000).toFixed(2),
        totalValueUsd: (Math.random() * 100).toFixed(2),
        firstTokenValue: (Math.random() * 100).toFixed(2),
        firstTokenValueUsd: (Math.random() * 100).toFixed(2),
        secondTokenValue: (Math.random() * 10000).toFixed(2),
        secondTokenValueUsd: (Math.random() * 10).toFixed(2),
      },
      {
        id: Math.random(),
        tokenPair: 'DBZ/ADA',
        DEX: 'Sundaeswap',
        DEXLink: 'https://v2.sundaeswap.finance/',
        firstToken: {
          name: 'DBZ',
          id: 'dbz',
        },
        secondToken: {
          name: 'ADA',
          id: 'ada',
        },
        lpTokens: (Math.random() * 1000000).toFixed(2),
        totalValue: (Math.random() * 1000).toFixed(2),
        totalValueUsd: (Math.random() * 100).toFixed(2),
        firstTokenValue: (Math.random() * 100).toFixed(2),
        firstTokenValueUsd: (Math.random() * 100).toFixed(2),
        secondTokenValue: (Math.random() * 10000).toFixed(2),
        secondTokenValueUsd: (Math.random() * 10).toFixed(2),
      },
      {
        id: Math.random(),
        tokenPair: 'ADA/BRICKS',
        DEX: 'Minswap',
        DEXLink: 'https://app.minswap.org/',
        firstToken: {
          name: 'ADA',
          id: 'ada',
        },
        secondToken: {
          name: 'BRICKS',
          id: 'bricks',
        },
        lpTokens: (Math.random() * 1000000).toFixed(2),
        totalValue: (Math.random() * 1000).toFixed(2),
        totalValueUsd: (Math.random() * 100).toFixed(2),
        firstTokenValue: (Math.random() * 100).toFixed(2),
        firstTokenValueUsd: (Math.random() * 100).toFixed(2),
        secondTokenValue: (Math.random() * 10000).toFixed(2),
        secondTokenValueUsd: (Math.random() * 10).toFixed(2),
      },
      {
        id: Math.random(),
        tokenPair: 'ADA/POPPA',
        DEX: 'Sundaeswap',
        DEXLink: 'https://v2.sundaeswap.finance/',
        firstToken: {
          name: 'ADA',
          id: 'ada',
        },
        secondToken: {
          name: 'POPPA',
          id: 'poppa',
        },
        lpTokens: (Math.random() * 1000000).toFixed(2),
        totalValue: (Math.random() * 1000).toFixed(2),
        totalValueUsd: (Math.random() * 100).toFixed(2),
        firstTokenValue: (Math.random() * 100).toFixed(2),
        firstTokenValueUsd: (Math.random() * 100).toFixed(2),
        secondTokenValue: (Math.random() * 10000).toFixed(2),
        secondTokenValueUsd: (Math.random() * 10).toFixed(2),
      },
      {
        id: Math.random(),
        tokenPair: 'CUBY/VALDO',
        DEX: 'Sundaeswap',
        DEXLink: 'https://v2.sundaeswap.finance/',
        firstToken: {
          name: 'CUBY',
          id: 'cuby',
        },
        secondToken: {
          name: 'VALDO',
          id: 'valdo',
        },
        lpTokens: (Math.random() * 1000000).toFixed(2),
        totalValue: (Math.random() * 1000).toFixed(2),
        totalValueUsd: (Math.random() * 100).toFixed(2),
        firstTokenValue: (Math.random() * 100).toFixed(2),
        firstTokenValueUsd: (Math.random() * 100).toFixed(2),
        secondTokenValue: (Math.random() * 10000).toFixed(2),
        secondTokenValueUsd: (Math.random() * 10).toFixed(2),
      },
      {
        id: Math.random(),
        tokenPair: 'SNEK/USDTST',
        DEX: 'Minswap',
        DEXLink: 'https://app.minswap.org/',
        firstToken: {
          name: 'SNEK',
          id: 'snek',
        },
        secondToken: {
          name: 'USDTST',
          id: 'usdtst',
        },
        lpTokens: (Math.random() * 1000000).toFixed(2),
        totalValue: (Math.random() * 1000).toFixed(2),
        totalValueUsd: (Math.random() * 100).toFixed(2),
        firstTokenValue: (Math.random() * 100).toFixed(2),
        firstTokenValueUsd: (Math.random() * 100).toFixed(2),
        secondTokenValue: (Math.random() * 10000).toFixed(2),
        secondTokenValueUsd: (Math.random() * 10).toFixed(2),
      },
      {
        id: Math.random(),
        tokenPair: 'GERO/NMKR',
        DEX: 'Minswap',
        DEXLink: 'https://app.minswap.org/',
        firstToken: {
          name: 'GERO',
          id: 'gero',
        },
        secondToken: {
          name: 'NMKR',
          id: 'nmkr',
        },
        lpTokens: (Math.random() * 1000000).toFixed(2),
        totalValue: (Math.random() * 1000).toFixed(2),
        totalValueUsd: (Math.random() * 100).toFixed(2),
        firstTokenValue: (Math.random() * 100).toFixed(2),
        firstTokenValueUsd: (Math.random() * 100).toFixed(2),
        secondTokenValue: (Math.random() * 10000).toFixed(2),
        secondTokenValueUsd: (Math.random() * 10).toFixed(2),
      },
      {
        id: Math.random(),
        tokenPair: 'SMOKES/CPASS',
        DEX: 'Minswap',
        DEXLink: 'https://app.minswap.org/',
        firstToken: {
          name: 'SMOKES',
          id: 'smokes',
        },
        secondToken: {
          name: 'CPASS',
          id: 'cpass',
        },
        lpTokens: (Math.random() * 1000000).toFixed(2),
        totalValue: (Math.random() * 1000).toFixed(2),
        totalValueUsd: (Math.random() * 100).toFixed(2),
        firstTokenValue: (Math.random() * 100).toFixed(2),
        firstTokenValueUsd: (Math.random() * 100).toFixed(2),
        secondTokenValue: (Math.random() * 10000).toFixed(2),
        secondTokenValueUsd: (Math.random() * 10).toFixed(2),
      },
    ],
    orderList: [
      {
        id: Math.random(),
        pair: 'ADA/LVLC',
        firstToken: {
          name: 'ADA',
          id: 'ada',
        },
        secondToken: {
          name: 'LVLC',
          id: 'lvlc',
        },
        DEX: 'Minswap',
        DEXLink: 'https://app.minswap.org/',
        assetPrice: Math.round(Math.random() * 10),
        assetAmount: Math.round(Math.random() * 10),
        transactionId: '043a2bfbb1d66d9883a068059a4e35bb53b7bdc6f5637d7b934150c453ffb116',
        totalValue: (Math.random() * 10).toFixed(2),
        totalValueUsd: (Math.random() * 10).toFixed(2),
      },
      {
        id: Math.random(),
        pair: 'MILK/LVLC',
        firstToken: {
          name: 'MILK',
          id: 'milk',
        },
        secondToken: {
          name: 'LVLC',
          id: 'lvlc',
        },
        DEX: 'Sundaeswap',
        DEXLink: 'https://v2.sundaeswap.finance/',
        assetPrice: Math.round(Math.random() * 10),
        assetAmount: Math.round(Math.random() * 10),
        transactionId: 'a0a863e8eb398c04caebdbd3a3e50733bcb6c06e118c36eadb7f7b53424668a5',
        totalValue: (Math.random() * 10).toFixed(2),
        totalValueUsd: (Math.random() * 10).toFixed(2),
      },
      {
        id: Math.random(),
        pair: 'DICE/WTAB',
        firstToken: {
          name: 'DICE',
          id: 'dice',
        },
        secondToken: {
          name: 'WTAB',
          id: 'wtab',
        },
        DEX: 'Minswap',
        DEXLink: 'https://app.minswap.org/',
        assetPrice: Math.round(Math.random() * 10),
        assetAmount: Math.round(Math.random() * 10),
        transactionId: '043a2bfbb1d66d9883a068059a4e35bb53b7bdc6f5637d7b934150c453ffb116',
        totalValue: (Math.random() * 10).toFixed(2),
        totalValueUsd: (Math.random() * 10).toFixed(2),
      },
      {
        id: Math.random(),
        pair: 'FREN/SMOKES',
        firstToken: {
          name: 'FREN',
          id: 'fren',
        },
        secondToken: {
          name: 'SMOKES',
          id: 'smokes',
        },
        DEX: 'Sundaeswap',
        DEXLink: 'https://v2.sundaeswap.finance/',
        assetPrice: Math.round(Math.random() * 10),
        assetAmount: Math.round(Math.random() * 10),
        transactionId: 'a0a863e8eb398c04caebdbd3a3e50733bcb6c06e118c36eadb7f7b53424668a5',
        totalValue: (Math.random() * 10).toFixed(2),
        totalValueUsd: (Math.random() * 10).toFixed(2),
      },
      {
        id: Math.random(),
        pair: 'CCCC/HOSKY',
        firstToken: {
          name: 'CCCC',
          id: 'cccc',
        },
        secondToken: {
          name: 'HOSKY',
          id: 'hosky',
        },
        DEX: 'Minswap',
        DEXLink: 'https://app.minswap.org/',
        assetPrice: Math.round(Math.random() * 10),
        assetAmount: Math.round(Math.random() * 10),
        transactionId: '043a2bfbb1d66d9883a068059a4e35bb53b7bdc6f5637d7b934150c453ffb116',
        totalValue: (Math.random() * 10).toFixed(2),
        totalValueUsd: (Math.random() * 10).toFixed(2),
      },
      {
        id: Math.random(),
        pair: 'CCCC/DRIP',
        firstToken: {
          name: 'CCCC',
          id: 'cccc',
        },
        secondToken: {
          name: 'DRIP',
          id: 'drip',
        },
        DEX: 'Sundaeswap',
        DEXLink: 'https://v2.sundaeswap.finance/',
        assetPrice: Math.round(Math.random() * 10),
        assetAmount: Math.round(Math.random() * 10),
        transactionId: 'a0a863e8eb398c04caebdbd3a3e50733bcb6c06e118c36eadb7f7b53424668a5',
        totalValue: (Math.random() * 10).toFixed(2),
        totalValueUsd: (Math.random() * 10).toFixed(2),
      },
      {
        id: Math.random(),
        pair: 'ATH/CATSKY',
        firstToken: {
          name: 'ATH',
          id: 'ath',
        },
        secondToken: {
          name: 'CATSKY',
          id: 'catsky',
        },
        DEX: 'Minswap',
        DEXLink: 'https://app.minswap.org/',
        assetPrice: Math.round(Math.random() * 10),
        assetAmount: Math.round(Math.random() * 10),
        transactionId: '043a2bfbb1d66d9883a068059a4e35bb53b7bdc6f5637d7b934150c453ffb116',
        totalValue: (Math.random() * 10).toFixed(2),
        totalValueUsd: (Math.random() * 10).toFixed(2),
      },
      {
        id: Math.random(),
        pair: 'ADA/USDC',
        firstToken: {
          name: 'ADA',
          id: 'ada',
        },
        secondToken: {
          name: 'USDC',
          id: 'usdc',
        },
        DEX: 'Minswap',
        DEXLink: 'https://app.minswap.org/',
        assetPrice: Math.round(Math.random() * 10),
        assetAmount: Math.round(Math.random() * 10),
        transactionId: 'a0a863e8eb398c04caebdbd3a3e50733bcb6c06e118c36eadb7f7b53424668a5',
        totalValue: (Math.random() * 10).toFixed(2),
        totalValueUsd: (Math.random() * 10).toFixed(2),
      },
      {
        id: Math.random(),
        pair: 'AVAX/COPI',
        firstToken: {
          name: 'AVAX',
          id: 'avax',
        },
        secondToken: {
          name: 'COPI',
          id: 'copi',
        },
        DEX: 'Sundaeswap',
        DEXLink: 'https://v2.sundaeswap.finance/',
        assetPrice: Math.round(Math.random() * 10),
        assetAmount: Math.round(Math.random() * 10),
        transactionId: 'a0a863e8eb398c04caebdbd3a3e50733bcb6c06e118c36eadb7f7b53424668a5',
        totalValue: (Math.random() * 10).toFixed(2),
        totalValueUsd: (Math.random() * 10).toFixed(2),
      },
    ],
  },

  transactionHistory: [
    {
      type: HistoryItemType.SENT,
      status: HistoryItemStatus.LOW,
      time: getRandomTime(start24HoursAgo, now),
      feeValue: Math.random().toFixed(2),
      feeValueUsd: Math.random().toFixed(2),
      amountTotal: (1000000 * Math.random()).toFixed(5),
      amountTotalUsd: (100000 * Math.random()).toFixed(2),
      amountAsset: `${Math.round(100 * Math.random())} MILK`,
    },
    {
      type: HistoryItemType.RECEIVED,
      status: HistoryItemStatus.LOW,
      time: getRandomTime(start24HoursAgo, now),
      amountTotal: (1000000 * Math.random()).toFixed(5),
      amountTotalUsd: (100000 * Math.random()).toFixed(2),
      amountAsset: Math.round(10 * Math.random()),
    },
    {
      type: HistoryItemType.ERROR,
      status: HistoryItemStatus.FAILED,
      time: getRandomTime(start24HoursAgo, now),
      amountTotal: (1000000 * Math.random()).toFixed(5),
      amountTotalUsd: (100000 * Math.random()).toFixed(2),
      amountAsset: Math.round(10 * Math.random()),
    },
    {
      type: HistoryItemType.WITHDRAW,
      status: HistoryItemStatus.HIGH,
      time: getRandomTime(start1WeekAgo, now),
      feeValue: Math.random().toFixed(2),
      feeValueUsd: Math.random().toFixed(2),
      amountTotal: (1000000 * Math.random()).toFixed(5),
      amountTotalUsd: (100000 * Math.random()).toFixed(2),
      amountAsset: `${Math.round(100 * Math.random())} MILK`,
    },
    {
      type: HistoryItemType.DELEGATE,
      status: HistoryItemStatus.HIGH,
      time: getRandomTime(start24HoursAgo, now),
      feeValue: Math.random().toFixed(2),
      feeValueUsd: Math.random().toFixed(2),
      amountTotal: (1000000 * Math.random()).toFixed(5),
      amountTotalUsd: (100000 * Math.random()).toFixed(2),
      amountAsset: `${Math.round(100 * Math.random())} MILK`,
    },
  ],
};

export default mockData;
