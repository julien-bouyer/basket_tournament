// export default {
//   template: `
//   <transition name="modal">
//     <div class="modal fade show">
//       <div class="modal-dialog" role="document">
//         <div class="modal-content">
//           <div class="modal-header">
//             <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
//             <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//               <span aria-hidden="true">&times;</span>
//             </button>
//           </div>
//           <div class="modal-body">
//             ...
//           </div>
//           <div class="modal-footer">
//             <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
//             <button type="button" class="btn btn-primary">Save changes</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   </transition>`
// };
export default {
  template: `
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel"><slot name="header"></slot></h5>
            <button type="button" class="close" @click="$emit('close')">
              <span>&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <slot name="body"></slot>
          </div>
          <div class="modal-footer">
            <slot name="footer">
              <button class="btn btn-primary" @click="$emit('close')">Valider</button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>`
};
