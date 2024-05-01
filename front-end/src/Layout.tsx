import { Header } from './components/Header'
import { Outlet } from 'react-router-dom'

export const Layout: React.FC = () => {
    return (
        <>
            <Header />
            <div className="content flex-column">
                <Outlet />
            </div>
        </>
    )
};