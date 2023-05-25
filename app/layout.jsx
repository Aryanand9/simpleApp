import { Nav, Provider } from '@components'
import '@styles/global.css'


export const metadata = {
    title: "Prompotia",
    description: "AI Powered Tools For Free"
}

const RootLayout = ({children}) => (
 
        <html lang='en'>
            <body>
                <Provider>
                <div className="main">
                    <div className='gradient'/>
                </div>

            <main className='app'>
                <Nav/>
                {children}
            </main>
            </Provider>
            </body>
        </html>
  
)

export default RootLayout
