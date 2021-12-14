import { publish } from 'gh-pages';

publish(
    'build',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/alexobviously/portfolio.git',
        user: {
            name: 'Alex Baker',
            email: 'iamalexbaker@gmail.com'
        },
        dotfiles: true
    },
    () => {
        console.log('Deploy Complete!');
    }
);
