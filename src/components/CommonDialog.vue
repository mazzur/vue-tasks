<template>
  <div class="fixed top-0 left-0 w-full h-full bg-gray-50 bg-opacity-75">
    <div class="modal-dialog modal-dialog-centered relative h-full p-8 w-auto">
      <dialog open class="border-2 px-6 py-4 w-1/2">
        <h2 class="text-xl mb-2">
          {{ title }}
        </h2>

        <slot></slot>

        <footer class="flex justify-end">
          <button
            class="bg-gray-400 hover:bg-gray-300 text-white py-2 px-4 rounded"
            @click="$emit('close')"
          >
            Close
          </button>
          <button
            class="bg-blue-500 hover:bg-blue-400 text-white py-2 px-4 rounded ml-4"
            @click="$emit('submit')"
          >
            Submit
          </button>
        </footer>
      </dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonDialog',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped></style>
