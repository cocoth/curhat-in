import '@/css/style.css'
import Image from 'next/image'
const IntroductionPage = () => {
  return (
    <div className='min-h-screen bg-gray-950 text-white'>
      <section className='flex flex-col justify-center mx-3 py-3 w-max'>
        <h1 className='font-semi text-xl text-center'>
          Kenapa kamu harus curhat kesini?
        </h1>
        <div className='flex flex-col justify-start my-3 border rounded-xl p-3 only-bg'>
          <div className='flex justify-center'>
            <Image src='/assets/checklist.svg'
              width={700} height={400}
              className='w-20 h-auto'
            />
          </div>
          <li>
            kami menjamin bahwa data pelanggan aman
          </li>
          <li>
            kami berani memberikan solusi tanpa debat
          </li>
          <li>
            solusi kami telah di percaya oleh lebih dari 500+ pelanggan
          </li>
          <li>
            konsultan kami profesional di bidangnya
          </li>
        </div>
      </section>

    </div>
  )
}

export default IntroductionPage