<template>
  <div class="p-8 bg-white dark:bg-black">
    <h3 class="px-4 text-xl">My interviews</h3>
    <table>
      <thead>
        <tr class="border-b-2">
          <th
            v-for="header in headers"
            :key="header.value"
            class="px-4 py-2 text-left"
          >
            {{ header.text }}
          </th>
        </tr>
      </thead>
      <tbody>
      <tr
        v-for="interview in interviews"
        :key="interview.id"
      >
        <td
          v-for="header in headers"
          :key="header.value"
          class="px-4 py-2"
        >
          <span v-if="header.value === 'feedback' && !interview[header.value]">
            <button
              class="bg-blue-500 hover:bg-blue-400 text-white py-1 px-2 rounded"
            >
              Leave feedback
            </button>
          </span>
          <span v-else>
            {{ interview[header.value] }}
          </span>
        </td>
      </tr>
      </tbody>
    </table>

    <CommonDialog
      v-if="false"
      title="Feedback for..."
    >
      <FeedbackForm/>
    </CommonDialog>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import FeedbackForm from '@/components/FeedbackForm';
import CommonDialog from '@/components/CommonDialog';

export default {
  name: 'MyInterviews',
  components: { CommonDialog, FeedbackForm },
  data() {
    return {
      headers: [
        { value: 'interviewer', text: 'Interviewer' },
        { value: 'candidate', text: 'Candidate' },
        { value: 'type', text: 'Type' },
        { value: 'feedback', text: 'Feedback' },
      ],
    };
  },
  computed: {
    ...mapGetters('Interviews', ['interviews']),
  },
  created() {
    this.fetchInterviews();
  },
  methods: {
    ...mapActions('Interviews', ['fetchInterviews']),
  },
};
</script>
