import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const navigation = [
  { name: 'HOME', href: '/' },
  { name: 'SOBRE NÓS', href: '/sobre-nos' },
  { name: 'CONTATO', href: '/contato' },
  { name: 'ÁREA RESTRITA', href: '/painel' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const location = useLocation();

  return (
    <Disclosure as="nav" className="sm:bg-transparent max-sm:bg-gray-800 z-20 relative max-sm:pb-8">
      {({ open }) => (
        <>
          <div className="mx-auto w-11/12 px-2 lg:py-6 sm:px-6 lg:px-4">
            <div className="relative flex h-16 items-center justify-between max-sm:pt-8 ">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="bg-gray-700 relative inline-flex max-sm:mt-8 items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-16 w-auto"
                    src={logo}
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => {
                      const isCurrent = location.pathname === item.href;
                      return (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={classNames(
                            isCurrent ? 'border-orange-p border-b text-white' : 'text-gray-400 hover:text-white',
                            'px-8 py-2 text-sm font-medium',
                          )}
                          aria-current={isCurrent ? 'page' : undefined}
                        >
                          {item.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden mt-8">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => {
                const isCurrent = location.pathname === item.href;
                return (
                  <DisclosureButton
                    key={item.name}
                    as={Link}
                    to={item.href}
                    className={classNames(
                      isCurrent ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium',
                    )}
                    aria-current={isCurrent ? 'page' : undefined}
                  >
                    {item.name}
                  </DisclosureButton>
                );
              })}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
