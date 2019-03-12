export default {
  template: `
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title"><slot name="header"></slot></h5>
              <button type="button" class="close" @click="$emit('close')">
                <span>&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <slot name="body"></slot>
            </div>
            <div class="modal-footer">
              <slot name="footer"></slot>
              <button type="button" class="btn btn-secondary" @click="$emit('close')">Fermer</button>
              <button type="button" class="btn btn-primary" @click="$emit('submit')">Enregistrer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>`
};
