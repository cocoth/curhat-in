import '@/css/style.css'
import Image from 'next/image'

const LandingPage = () => {
    return (
        <div className='flex flex-col items-center justify-center md:flex-row mt-10 md:mt-28 mx-4 md:mx-10'>
            <section className='flex justify-center w-full'>
                {/* <div className='flex justify-center items-center w-1/2 h-full overflow-hidden bg-gradient-to-tr from-blue-800 to-gray-700 rounded-full shadow-lg shadow-black'> */}
                <div className='flex justify-center items-center w-1/2 h-full overflow-hidden only-bg border rounded-full shadow-lg shadow-black'>
                    <Image src='/img/stressed.png'
                        // fill='true'
                        // sizes='(max-width: 768px)50dvw, (max-width: 1200px)100dvw, 100dvw'
                        // placeholder='blur'
                        width={1600} height={1200}
                        // className='w-full h-full'
                        className='w-full h-full object-cover'

                    />
                </div>
            </section>
            <div className='flex flex-col justify-center w-full'>
                <h1 className='text-xl md:text-3xl w-max bg-gray-600 rounded-full px-3 md:px-5 py-1 text-gray-200 font-bold font-sans'>
                    Kamu kenapa?
                </h1>

                <hr className='my-3 rounded-full' />

                <div className='flex flex-col gap-1 md:gap-2 justify-start '>
                    <section className='flex flex-row gap-1 md:gap-2'>
                        <p className='text-sm md:text-lg backdrop-blur-xl border rounded-xl px-3 py-1 text-preset-bright only-bg '>
                            kamu gpp kan?
                        </p>
                        <p className='text-sm md:text-lg backdrop-blur-xl border rounded-xl px-3 py-1 text-preset-bright only-bg '>
                            Ada yang mau di ceritain?
                        </p>
                        <p className='text-sm md:text-lg backdrop-blur-xl border rounded-xl px-3 py-1 text-preset-bright only-bg '>
                            kalo berat cerita aja ya
                        </p>
                    </section>
                    <section className='border bg-blue-950 bg-opacity-50 p-3 rounded-xl'>
                        <div className='backdrop-blur-sm rounded-md leading-8'>
                            <h1 className='text-white font-semibold'>
                                Suka kesel ga si kalo curhat sama temen atau sama orang lain tuh kadang suka di ajak adu nazib sama mereka?
                            </h1>
                            <p className='text-gray-200'>
                                Tenang aja, di kita semua masalahmu boleh kamu ceritakan tanpa harus khawatir tentang di ajak adu nazib.
                                <span className='ml-2 font-bold bg-gradient-to-r from-orange-400 to to-yellow-500 bg-clip-text text-transparent'>
                                    para konsultan kami juga profesional, jadi kamu setelah curhat disini bisa lega.
                                </span>
                            </p>
                        </div>
                        <div className='flex justify-end'>
                            <Image src='/img/disorder.png'
                                width={700} height={400}
                                className='w-20 h-auto invert'
                            />
                        </div>
                    </section>
                </div>
            </div>
            <section>

            </section>
        </div>
    )
}

export default LandingPage