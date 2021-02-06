import React, { useState } from 'react';
import style from './HeaderEdit.module.css'
import ShareModal from '../FormPanelElements/FormPanelElement/ShareModal/ShareModal'

const HeaderEdit = (props) => {

    const [showShare, setShowShare] = useState(false)
    return (
        <nav className={style.headerEdit}>
            <div className={style.buttons}>
                <button onClick={() => props.saveFormHandler()} className={style.saveButton}><span className={style.icon}><i className="fas fa-save"></i></span>Save</button>
                <button onClick={() => setShowShare(true)} className={style.shareButton}><span className={style.icon}><i className="fas fa-share"></i></span>Share</button>
                <ShareModal onClose={() => setShowShare(false)} showShare={showShare} form_key={props.form_key} />
            </div>
        </nav>
    )
}

export default HeaderEdit