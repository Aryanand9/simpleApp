'use client'
import React from "react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { SignIn, SignOut, useSession, signOut, getProviders, signIn } from 'next-auth/react'
const Nav = () => {
    const [toogleDropDown, setToogleDropDown] = useState(true)
    const {data:session} = useSession()

    const [provider, setProvider] = useState(null)
    useEffect(() => {
        const setUpProvider = async () => {
            const response = await getProviders()
            setProvider(response)
        }
        setUpProvider()

    }, [])
    return (
        <nav className="flex-between w-full mb-15 pt-3">
            <Link href={'/'} className="flex gap-2 flex-center">
                <Image
                    src={'/assets/images/logo.svg'}
                    alt="Prompotia logo"
                    width={30}
                    height={30}
                    className="object-contain"
                />
                <p className="logo_text">Prompotia</p>
            </Link>
            {/* Dekstop Navigation */}
            <div className="sm:flex hidden">
                {
                    session?.user ?
                        (
                            <div className="flex gap-3 md:gap-5">
                                <Link href='/create-prompt' className="black_btn">CreatePost</Link>
                                <button type="button" onClick={signOut} className="outline_btn">SignOut</button>
                                <Link href={'/profile'}>
                                    <Image
                                        src={session?.user.image}
                                        width={37}
                                        height={37}
                                        className="rounded-full"
                                        alt="profile"
                                    />
                                </Link>
                            </div>
                        )
                        :
                        (
                            <>
                                {
                                    provider && Object.values(provider).map((provider) => (
                                        <button
                                            type="button"
                                            key={provider.name}
                                            onClick={() => signIn(provider.id)}
                                            className="black_btn"
                                        >
                                            SignIn

                                        </button>
                                    ))
                                }
                            </>
                        )
                }
            </div>
            {/* Mobile Navigation */}
            <div className="sm:hidden flex relative ">
                {session?.user ? (
                    <div className="flex">
                        <Image
                            src={session?.user.image}
                            width={37}
                            height={37}
                            className="rounded-full"
                            alt="profile"
                            onClick={() => setToogleDropDown((prev) => !prev)}
                        />
                        {toogleDropDown && (
                            <div className="dropdown">
                                <Link href={'/profile'}
                                    className="dropdown_link"
                                    onClick={() => setToogleDropDown(false)}
                                >
                                    My Profile
                                </Link>
                                <Link href={'/create-prompt'}
                                    className="dropdown_link"
                                    onClick={() => setToogleDropDown(false)}
                                >
                                    Create Prompt
                                </Link>
                                <button type="button"
                                    className='mt-5 w-full black_btn'
                                    onClick={() => {
                                        setToogleDropDown(false)
                                        signOut()
                                    }}>
                                        SignOut

                                </button>
                            </div>
                        )}
                    </div>
                ) :
                    (
                        <>
                            {provider && Object.values(provider).map((provider) => (
                                <button
                                    type="button"
                                    key={provider.name}
                                    onClick={() => signIn(provider.id)}
                                    className="black_btn">
                                    SignIn
                                </button>
                            ))
                            }
                        </>
                    )

                }
            </div>
        </nav>
    )
}

export default Nav
