import { Choice } from './Choice';

export const options: { [key: string]: Choice[] } = {
  logs: [
    {
      value: 'all',
      label: 'all',
      usage: 'git log',
      nb: 'Type q in the terminal to exit the logs'
    },
    {
      value: 'last-n-commit',
      label: 'for last xxx number of commits',
      usage: 'git log -n',
      nb: 'Replace n with number of commits e.g. git log -2'
    },
    {
      value: 'particular-period',
      label: 'since a particular period',
      usage: 'git log --since=period',
      nb: 'Replace period with intended timeframe e.g git log --since=3days. You can use dates like 2018-12-31.\n\n Similar flags are --until, --before, --after'
    }
  ],
  branch: [
    {
      value: 'in',
      label: 'while working in the branch',
      usage: 'git branch -m <new name>'
    },
    {
      value: 'outside',
      label: 'from outside the branch',
      usage: 'git branch -m <old name> <new name>'
    }
  ],
  'add-new-branch': [
    {
      value: 'no-checkout',
      label: 'but remain in the current branch I am working from',
      usage: 'git branch <new name>'
    },
    {
      value: 'checkout',
      label: 'and switch to the new branch',
      usage: 'git checkout -b <new name>'
    },
    {
      value: 'checkout-remote',
      label: 'from another branch',
      usage: 'git checkout -b <new name> <another branch>'
    }
  ],
};

export const tertiaryOptions = options;