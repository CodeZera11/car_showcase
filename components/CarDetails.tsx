'use client'

import { CarProps } from "@/types";
import { Dialog, Transition } from '@headlessui/react'
import Image from "next/image";
import { Fragment } from 'react'

interface carDetailsProps {
    isOpen: boolean;
    closeModal: () => void;
    car: CarProps;
}

const CarDetails = ({ isOpen, closeModal, car }: carDetailsProps) => {
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <button type="button" onClick={closeModal}>
                                        <Image src='/close.svg' alt='close' width={20} height={20} className="object-contain right-4 absolute top-5" />
                                    </button>
                                    <div className="flex-1 flex flex-col gap-3">
                                        <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                                            <Image src='/hero.png' alt="car" fill className="object-contain" priority />
                                        </div>
                                        <div className="flex gap-3">
                                            <div className="flex-1 relative w-full h-24 bg-primary-blue-100">
                                                <Image src='/hero.png' fill priority alt="car-side" className="object-contain" />
                                            </div>
                                            <div className="flex-1 relative w-full h-24 bg-primary-blue-100">
                                                <Image src='/hero.png' fill priority alt="car-side" className="object-contain" />
                                            </div>
                                            <div className="flex-1 relative w-full h-24 bg-primary-blue-100">
                                                <Image src='/hero.png' fill priority alt="car-side" className="object-contain" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-7 capitalize flex-1 flex flex-col gap-2">
                                        <h2 className="font-semibold text-xl">{car.make} {car.model}</h2>

                                        <div className="mt-6 flex flex-wrap flex-col gap-4">
                                            {Object.entries(car).map(([key, value])=> (
                                                <div className="flex justify-between">
                                                    <h4 className="text-gray-500">{key}</h4>
                                                    <span className="text-gray-500">{value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default CarDetails