import React, { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CgSelect } from 'react-icons/cg'
import { Genre } from '../interfaces/interface'

interface Filter {
    gen: Genre[];
    filterMovie: (id: number) => void;
}

function Filters({ gen, filterMovie }: Filter) {
    const [select, setSelected] = useState('All')

    return (
        <div className='my-6 bg-dry border text-dryGray border-gray-800 w-[22rem]'>
            <Listbox
                value={select}
                onChange={(prev: any) => {
                    filterMovie(prev.id)
                    setSelected(prev.name)
                }}>
                <div className='relative'>
                    <Listbox.Button className='relative w-[22rem] border border-gray-800 text-white bg-main rounded-md shadow-sm cursor-default py-4 pl-6 pr-10 text-left text-md'>
                        <span className='block truncate'>{select}</span>
                        <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
                            <CgSelect className='w-5 h-5' aria-hidden='true' />
                        </span>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave='transition ease-in duration-100'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'>
                        <Listbox.Options className='absolute z-10 mt-1 w-full bg-white border border-gray-800 text-dryGray rounded-md shadow-lg max-h-60 py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm'>
                            {gen.map((item, i) => (
                                <Listbox.Option
                                    key={i}
                                    value={item}
                                    className={({ active }) =>
                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                            active ? 'bg-subMain text-white' : 'text-main'
                                        }`
                                    }>
                                    {({ selected }) => (
                                        <>
                                            <span
                                                className={`block truncate ${
                                                    selected
                                                        ? 'font-semibold'
                                                        : 'font-normal'
                                                }`}>
                                                {item.name}
                                            </span>
                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    )
}

export default Filters
