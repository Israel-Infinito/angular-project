export const navbarData = [
    {
        routeLink: 'home',
        icon: 'fas fa-home',
        label: 'HOME'
    },
    {
        routeLink: 'users-list',
        icon: 'fas fa-id-badge',
        label: 'USERS',

        subMenu: [
            {
                label: 'Users Lists',
                routeLink: 'users'
            },
            {
                label: 'Pending Users',
                routeLink: 'users'
            },
            {
                label: 'Declined Users',
                routeLink: 'users'
            }
        ]
    },
    {
        routeLink: 'bid-items',
        icon: 'fas fa-inbox-in',
        label: 'BID ITEMS'
    },
    {
        routeLink: 'bidding',
        icon: 'fas fa-arrows-alt-h',
        label: 'BIDDING'
    },

]