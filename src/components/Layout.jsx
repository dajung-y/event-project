export default function Layout({children}) {
  return(
    <div className="w-full h-screen flex justify-center">
      <div className="w-full max-w-[400px] h-full">
        {children}
      </div>
    </div>
  )
}