import * as React from 'react';

type Props = {
    children?: React.ReactNode
}

export const DarkLayout: React.FC<Props> = ({ children }) => {

    return (
        <>
            <div style={{
                backgroundColor: 'lightcoral',
                borderRadius: '5px',
                padding: '10px'
            }}>
                <h3>Dark-layout</h3>
                <div>
                    {children}
                </div>
            </div>
        </>
    );
}
