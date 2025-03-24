import './ResumeModal.scss';

export default function ResumeModal({ onCancel, onClose }) {
  return (
    <div 
      className='modal-container'
      onClick={(e) => {
        if(e.target.classList.contains("modal-container")) {
          onClose();
        }
      }}
    >
      <div className='modal'>
        <div className='modal__header'>
          <button 
            className="modal__button modal__button--close" 
            onClick={() => onClose()}
          >
            <img 
              className='modal__header--close'
              src='/src/assets/icons/close-24px.svg'
              alt='Close Icon'
            />
          </button>
        </div>

        <div className='modal__content'>
          <div className='modal__text'>
            <iframe 
              src="public\Bruna_Silva_Fernandes_Resume_Software_Developer.pdf" 
              title="Resume" 
              style={{ width: "100%", height: "80vh", border: "none" }}
            />
          </div>
          
          <div className="modal__footer">
            <button 
              className="modal__button modal__button--cancel" 
              onClick={() => onCancel()}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}