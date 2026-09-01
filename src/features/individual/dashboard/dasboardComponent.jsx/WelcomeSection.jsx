
const WelcomeSection = () => {
  const hour = new Date().getHours()
  let greeting

  if (hour < 12) {
    greeting = "Good Morning"
  } else if (hour < 17) {
    greeting = "Good Afternoon"
  } else {
    greeting = "Good Evening"
  }
  return (
      <div className='px-5 py-2'>
          <h1 className='text-white text-xl font-semibold'>{greeting}, Aman 👋</h1>
          <p className='text-zinc-400 text-sm'>Here's an overview of your assets</p>
      </div>
  )
}

export default WelcomeSection
