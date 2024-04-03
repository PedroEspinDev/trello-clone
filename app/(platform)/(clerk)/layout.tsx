const ClerkLayout = ({ children }: {
    children: React.ReactNode;
}) => {
    return(
        <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {children}
        </div>
    );
};

export default ClerkLayout;