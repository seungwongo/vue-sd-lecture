<template>
  <div>
    <ModalLayout>
      <template v-slot:main>
        <p>모달 안에 들어가는 콘텐츠 1</p>
        <p>모달 안에 들어가는 콘텐츠 2</p>
        <p>모달 안에 들어가는 콘텐츠 3</p>
        <p>모달 안에 들어가는 콘텐츠 4</p>
      </template>
      <template v-slot:footer>
        <button>닫기</button>
      </template>
      <template v-slot:header2>
        <h1>모달 팝업 타이틀</h1>
      </template>
    </ModalLayout>
  </div>
</template>
<script>
import ModalLayout from '@/components/slot/SlotModalLayout'
export default {
  name: '',
  components: { ModalLayout },
  data() {
    return {
      sampleData: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
