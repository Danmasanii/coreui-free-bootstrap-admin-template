export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'primary',
        text: 'NEW'
      }
    },
    {
      title: true,
      name: 'UI elements',
      wrapper: {
        element: 'span',
        attributes: {}
      },
      class: ''
    },
    {
      name: 'Components',
      url: '/components',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Buttons',
          url: '/components/buttons',
          icon: 'icon-puzzle'
        },
        {
          name: 'Social Buttons',
          url: '/components/social-buttons',
          icon: 'icon-puzzle'
        },
        {
          name: 'Cards',
          url: '/components/cards',
          icon: 'icon-puzzle'
        },
        {
          name: 'Modals',
          url: '/components/modals',
          icon: 'icon-puzzle'
        },
        {
          name: 'Switches',
          url: '/components/switches',
          icon: 'icon-puzzle'
        },
        {
          name: 'Tables',
          url: '/components/tables',
          icon: 'icon-puzzle'
        }
      ]
    },
    {
      name: 'Forms',
      url: '/forms',
      icon: 'icon-note',
      children: [
        {
          name: 'Basic Forms',
          url: '/forms/basic-forms',
          icon: 'icon-note'
        },
        {
          name: 'Text Editors',
          url: '/forms/text-editors',
          icon: 'icon-note'
        }
      ]
    },
    {
      name: 'Icons',
      url: '/icons',
      icon: 'icon-star',
      children: [
        {
          name: 'Font Awesome',
          url: '/icons/font-awesome',
          icon: 'icon-star',
          badge: {
            variant: 'secondary',
            text: '4.7'
          }
        },
        {
          name: 'Simple Line Icons',
          url: '/icons/simple-line-icons',
          icon: 'icon-star'
        }
      ]
    },
    {
      name: 'Widgets',
      url: '/widgets',
      icon: 'icon-calculator',
      badge: {
        variant: 'danger',
        text: 'NEW'
      }
    },
    {
      name: 'Charts',
      url: '/charts',
      icon: 'icon-pie-chart'
    },
    {
      divider: true
    },
    {
      title: true,
      name: 'Extras',
      wrapper: {
        element: 'span',
        attributes: {}
      },
      class: ''
    },
    {
      name: 'Pages',
      url: '/pages',
      icon: 'icon-star',
      children: [
        {
          name: 'Login',
          url: '/pages/login',
          icon: 'icon-star'
        },
        {
          name: 'Register',
          url: '/pages/register',
          icon: 'icon-star'
        },
        {
          name: 'Error 404',
          url: '/pages/404',
          icon: 'icon-star'
        },
        {
          name: 'Error 500',
          url: '/pages/500',
          icon: 'icon-star'
        }
      ]
    },
    {
      name: 'UI Kits',
      url: '/ui-kits',
      icon: 'icon-layers',
      children: [
        {
          name: 'Invoicing',
          url: '/ui-kits/invoicing',
          icon: 'icon-speech',
          children: [
            {
              name: 'Invoice',
              url: '/ui-kits/invoicing/invoice',
              icon: 'icon-speech'
            }
          ]
        },
        {
          name: 'Email',
          url: '/ui-kits/email',
          icon: 'icon-speech',
          children: [
            {
              name: 'Inbox',
              url: '/ui-kits/email/inbox',
              icon: 'icon-speech'
            },
            {
              name: 'Message',
              url: '/ui-kits/email/message',
              icon: 'icon-speech'
            },
            {
              name: 'Compose',
              url: '/ui-kits/email/compose',
              icon: 'icon-speech'
            }
          ]
        }
      ]
    }
  ]
}