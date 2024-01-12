import { useTranslation } from "react-i18next";
import "./customer.css";
const ReturnsPolicy = () => {
  const { t } = useTranslation();
  return (
    <div className="container customer">
      {t("lang") === "en" && (
        <>
          <h1>Hamad Al Azzani Higher Education Services Returns Policy</h1>

          <p>Last updated: 11 January 2024.</p>
          <p>
            We understand that there may come a time to return a purchase and we
            aim to make the returns process as simple as possible.
          </p>
          <p>
            If you’re looking to return or exchange your order, we offer free
            returns within 2 days of purchase. You can return your product for a
            refund to the original payment method.
            <br />
            Please note:
          </p>
          <ul>
            <li>
              • The user does not have the right to cancel the contract or
              change the university after 48 hours of submitting the
              application.
            </li>
            <li>
              • The user has no right to request a change or amendment to the
              admission after the acceptance is issued by the university or the
              educational institution, except with additional fees agreed upon
              by both parties.
            </li>
            <li>
              • If the user) does not complete the required papers or documents
              within a maximum period of two weeks from signing the contract,
              the second party will not be entitled to a refund of any fees paid
              (if any).
            </li>
            <li>
              • The use does not have the right alone to change their mind
              regarding the study program, university, or country in which they
              want to study. Otherwise, it will be considered withdrawn, and the
              second will not have the right to recover the amounts paid (if
              any).
            </li>
            <li>
              • In the event that the user does not pass the language placement
              exam or IELTS test or does not pass the personal interview or any
              tests approved by the university, the fees are non-refundable (if
              any).
            </li>
          </ul>
          <h2>Return Process</h2>
          <p>
            To return an item, email us at{" "}
            <a
              href="mailto:info@hamad-edu.com"
              rel="noreferrer"
              target="_blank"
            >
              info@hamad-edu.com
            </a>{" "}
            with your Order Number and return reason and our support team will
            be happy to assist you with the next steps.
          </p>
          <h2>Refunds</h2>
          <p>
            After receiving your item/s and inspecting the condition, we will
            process your refund or exchange. Please allow at least 14 days from
            the receipt of your item/s for your return to be processed.
          </p>
          <h2>Questions</h2>
          <p>
            For questions relating to our returns policy, please contact us at
            <a
              href="mailto:info@hamad-edu.com"
              rel="noreferrer"
              target="_blank"
            >
              info@hamad-edu.com
            </a>
          </p>
        </>
      )}
      {t("lang") === "ar" && (
        <>
          <h1>سياسة الإرجاع لخدمات التعليم العالي لحمد العزاني</h1>

          <p>آخر تحديث: 11 يناير 2024.</p>
          <p>
            نفهم أنه قد يأتي وقت لإعادة الشراء ونهدف إلى جعل عملية الإرجاع بسيطة
            قدر الإمكان.
          </p>
          <p>
            إذا كنت تبحث عن إعادة أو تبديل طلبك، نقدم عمليات إرجاع مجانية خلال
            يومين من الشراء. يمكنك إعادة المنتج مقابل استرداد الدفعة الأصلية.
            <br />
            يرجى ملاحظة:
          </p>
          <ul>
            <li>
              • ليس للمستخدم الحق في إلغاء العقد أو تغيير الجامعة بعد 48 ساعة من
              تقديم الطلب.
            </li>
            <li>
              • ليس للمستخدم حق طلب تغيير أو تعديل القبول بعد صدور القبول من
              الجامعة أو المؤسسة التعليمية، إلا برسوم إضافية يتفق عليها الطرفان.
            </li>
            <li>
              • إذا لم يكمل المستخدم) الأوراق أو الوثائق المطلوبة في غضون
              أسبوعين كحد أقصى من توقيع العقد، فلن يكون للطرف الثاني الحق في
              استرداد أي رسوم مدفوعة (إن وجدت).
            </li>
            <li>
              • ليس للمستخدم الحق بمفرده في تغيير رأيه بشأن برنامج الدراسة، أو
              الجامعة، أو البلد الذي يرغب في الدراسة فيه. وإلا، سيعتبر مستقيلًا،
              ولن يكون للثاني الحق في استرداد المبالغ المدفوعة (إن وجدت).
            </li>
            <li>
              • في حالة عدم اجتياز المستخدم لامتحان تحديد المستوى اللغوي أو
              اختبار IELTS أو عدم اجتياز المقابلة الشخصية أو أي اختبارات معتمدة
              من الجامعة، فإن الرسوم غير قابلة للاسترداد (إن وجدت).
            </li>
          </ul>
          <h2>عملية الإرجاع</h2>
          <p>
            لإعادة العنصر، أرسل لنا بريدًا إلكترونيًا على{" "}
            <a
              href="mailto:info@hamad-edu.com"
              rel="noreferrer"
              target="_blank"
            >
              info@hamad-edu.com
            </a>{" "}
            مع رقم الطلب وسبب الإرجاع وسيكون فريق الدعم لدينا سعيدًا بمساعدتك في
            الخطوات التالية.
          </p>
          <h2>المبالغ المستردة</h2>
          <p>
            بعد استلام العنصر/العناصر الخاصة بك وفحص الحالة، سنقوم بمعالجة
            استرداد الأموال أو الاستبدال. يرجى السماح بمرور 14 يومًا على الأقل
            من استلام العنصر/العناصر الخاصة بك ليتم معالجة الإرجاع.
          </p>
          <h2>الأسئلة</h2>
          <p>
            بالنسبة للأسئلة المتعلقة بسياسة الإرجاع لدينا، يرجى الاتصال بنا على
            <a
              href="mailto:info@hamad-edu.com"
              rel="noreferrer"
              target="_blank"
            >
              info@hamad-edu.com
            </a>
          </p>
        </>
      )}
    </div>
  );
};

export default ReturnsPolicy;
