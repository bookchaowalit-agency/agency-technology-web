export type PseoService = Readonly<{
  kind: 'service';
  slug: string;
  name: string;
  title: string;
  description: string;
  intent: string;
  buyer: string;
  context: string;
  workflow: readonly string[];
  deliverables: readonly string[];
  evidence: readonly string[];
  readiness: string;
  agencySlug: string;
  agencyName: string;
  agencyThaiName: string;
  agencyStatus: 'incubating' | 'target' | 'locked';
  agencyStage: string;
}>;

export const pseoService: PseoService = {
  "kind": "service",
  "slug": "ai-automation-workflow-sprint",
  "name": "AI and automation workflow sprint",
  "title": "ทำ AI Automation ให้เห็น workflow ที่วัดผลได้",
  "description": "เริ่มจาก process เดียว วัด baseline ออกแบบจุดควบคุม และส่ง prototype ที่ทีมตรวจรับได้",
  "intent": "ต้องการเริ่มทำ AI หรือ automation กับงานจริงโดยยังควบคุมขอบเขต ความเสี่ยง และการวัดผลได้",
  "buyer": "CTO, CIO และผู้บริหาร operations",
  "context": "บริการตั้งต้นของ Technology agency สำหรับการทดลอง workflow หนึ่งเส้นทาง ไม่ใช่โครงการย้ายระบบทั้งองค์กร",
  "workflow": [
    "เลือก process เดียวและระบุคนที่รับผิดชอบผลลัพธ์",
    "เก็บ baseline, input, exception และ acceptance criteria ก่อนออกแบบ",
    "ออกแบบ automation พร้อม human review, data boundary และ rollback path",
    "ส่ง prototype และ evidence handoff ให้ทีมตัดสินใจรอบถัดไป"
  ],
  "deliverables": [
    "process map และ baseline ที่ตรวจย้อนกลับได้",
    "workflow design พร้อมจุดอนุมัติและกรณีที่ต้องส่งให้คนตรวจ",
    "prototype หรือ integration slice ในขอบเขตที่ตกลง",
    "acceptance checklist และคำแนะนำสำหรับ pilot ถัดไป"
  ],
  "evidence": [
    "ใช้หลักคิดจาก AI Trust readiness และระบบ automation ภายในเป็น evidence anchor",
    "ผลลัพธ์ของลูกค้าต้องถูกเก็บและอนุมัติแยกก่อนนำมาอ้างเป็น case study",
    "หน้านี้ไม่อ้าง productivity outcome, SLA หรือการรับรองด้านความปลอดภัย"
  ],
  "readiness": "สถานะ pilot: ต้องยืนยัน technology lead, process owner, baseline, privacy/security review และวิธีส่งมอบก่อนเปิด inquiry",
  "agencySlug": "technology",
  "agencyName": "Technology",
  "agencyThaiName": "เทคโนโลยีและระบบ",
  "agencyStatus": "target",
  "agencyStage": "P1"
};
