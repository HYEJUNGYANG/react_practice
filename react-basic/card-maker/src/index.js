import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import AuthService from './service/auth_service';
import ImageUploader from './service/image_uploader';
import ImageFileInput from './components/image_file_input/image_file_input';
import CardRepository from './service/card_repository';

const authService = new AuthService();
const cardRepository = new CardRepository();
const imageUploader = new ImageUploader();
const FileInput = (props) => (
    <ImageFileInput {...props} imageUploader={imageUploader} />
);

ReactDOM.render(
    <React.StrictMode>
        <App
            authService={authService}
            FileInput={FileInput}
            cardRepository={cardRepository}
        />
    </React.StrictMode>,
    document.getElementById('root')
);

// function AppWithCallbackAfterRender() {
//     return (
//         <React.StrictMode>
//             <App
//                 authService={authService}
//                 FileInput={FileInput}
//                 cardRepository={cardRepository}
//             />
//         </React.StrictMode>
//     );
// }

// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container);
// root.render(<AppWithCallbackAfterRender />);
