import { useTranslation } from "react-i18next";
import "./customer.css";
import { Link } from "react-router-dom";
const TermsOfService = () => {
  const { t } = useTranslation();
  return (
    <div className="container customer">
      {t("lang") === "en" && (
        <>
          <h1>Hamad Al Azzani Higher Education Services Terms of Service</h1>
          <p>
            These Terms of Service govern your use of the website located at
            <Link to="/">https://www.hamad-edu.com</Link> and any related
            services provided by Hamad Al Azzani Higher Education Services.
          </p>
          <p>
            By accessing <Link to="/">https://www.hamad-edu.com</Link>, you
            agree to abide by these Terms of Service and to comply with all
            applicable laws and regulations. If you do not agree with these
            Terms of Service, you are prohibited from using or accessing this
            website or using any other services provided by Hamad Al Azzani
            Higher Education Services.
          </p>
          <p>
            We, Hamad Al Azzani Higher Education Services, reserve the right to
            review and amend any of these Terms of Service at our sole
            discretion. Upon doing so, we will update this page. Any changes to
            these Terms of Service will take effect immediately from the date of
            publication.
          </p>
          <p>These Terms of Service were last updated on 11 January 2024.</p>
          <h2>Limitations of Use</h2>
          <p>
            By using this website, you warrant on behalf of yourself, your
            users, and other parties you represent that you will not:
          </p>
          <ul>
            <li>
              • modify, copy, prepare derivative works of, decompile, or reverse
              engineer any materials and software contained on this website;
            </li>
            <li>
              • remove any copyright or other proprietary notations from any
              materials and software on this website;
            </li>
            <li>
              • transfer the materials to another person or "mirror" the
              materials on any other server;
            </li>
            <li>
              • knowingly or negligently use this website or any of its
              associated services in a way that abuses or disrupts our networks
              or any other service Hamad Al Azzani Higher Education Services
              provides;
            </li>
            <li>
              • use this website or its associated services to transmit or
              publish any harassing, indecent, obscene, fraudulent, or unlawful
              material;
            </li>
            <li>
              • use this website or its associated services in violation of any
              applicable laws or regulations;
            </li>
            <li>
              • use this website in conjunction with sending unauthorized
              advertising or spam;
            </li>
            <li>
              • harvest, collect, or gather user data without the user’s
              consent; or
            </li>
            <li>
              • use this website or its associated services in such a way that
              may infringe the privacy, intellectual property rights, or other
              rights of third parties.
            </li>
          </ul>
          <h2>Intellectual Property</h2>
          <p>
            The intellectual property in the materials contained in this website
            are owned by or licensed to Hamad Al Azzani Higher Education
            Services and are protected by applicable copyright and trademark
            law. We grant our users permission to download one copy of the
            materials for personal, non-commercial transitory use.
          </p>
          <p>
            This constitutes the grant of a license, not a transfer of title.
            This license shall automatically terminate if you violate any of
            these restrictions or the Terms of Service, and may be terminated by
            Hamad Al Azzani Higher Education Services at any time.
          </p>
          <h2>Liability</h2>
          <p>
            Our website and the materials on our website are provided on an 'as
            is' basis. To the extent permitted by law, Hamad Al Azzani Higher
            Education Services makes no warranties, expressed or implied, and
            hereby disclaims and negates all other warranties including, without
            limitation, implied warranties or conditions of merchantability,
            fitness for a particular purpose, or non-infringement of
            intellectual property, or other violation of rights.
          </p>
          <p>
            In no event shall Hamad Al Azzani Higher Education Services or its
            suppliers be liable for any consequential loss suffered or incurred
            by you or any third party arising from the use or inability to use
            this website or the materials on this website, even if Hamad Al
            Azzani Higher Education Services or an authorized representative has
            been notified, orally or in writing, of the possibility of such
            damage.
          </p>
          <p>
            In the context of this agreement, "consequential loss" includes any
            consequential loss, indirect loss, real or anticipated loss of
            profit, loss of benefit, loss of revenue, loss of business, loss of
            goodwill, loss of opportunity, loss of savings, loss of reputation,
            loss of use and/or loss or corruption of data, whether under
            statute, contract, equity, tort (including negligence), indemnity or
            otherwise.
          </p>
          <p>
            Because some jurisdictions do not allow limitations on implied
            warranties, or limitations of liability for consequential or
            incidental damages, these limitations may not apply to you.
          </p>
          <h2>Accuracy of Materials</h2>
          <p>
            The materials appearing on our website are not comprehensive and are
            for general information purposes only. Hamad Al Azzani Higher
            Education Services does not warrant or make any representations
            concerning the accuracy, likely results, or reliability of the use
            of the materials on this website, or otherwise relating to such
            materials or on any resources linked to this website.
          </p>
          <h2>Links</h2>
          <p>
            Hamad Al Azzani Higher Education Services has not reviewed all of
            the sites linked to its website and is not responsible for the
            contents of any such linked site. The inclusion of any link does not
            imply endorsement, approval or control by Hamad Al Azzani Higher
            Education Services of the site. Use of any such linked site is at
            your own risk and we strongly advise you make your own
            investigations with respect to the suitability of those sites.
          </p>
          <h2>Right to Terminate</h2>
          <p>
            We may suspend or terminate your right to use our website and
            terminate these Terms of Service immediately upon written notice to
            you for any breach of these Terms of Service.
          </p>
          <h2>Severance</h2>
          <p>
            Any term of these Terms of Service which is wholly or partially void
            or unenforceable is severed to the extent that it is void or
            unenforceable. The validity of the remainder of these Terms of
            Service is not affected.
          </p>
          <h2>Governing Law</h2>
          <p>
            These Terms of Service are governed by and construed in accordance
            with the laws of Oman. You irrevocably submit to the exclusive
            jurisdiction of the courts in that State or location.
          </p>
        </>
      )}
      {t("lang") === "ar" && (
        <>
          <h1>شروط خدمات خدمات التعليم العالي لحمد العزاني</h1>
          <p>
            تحكم هذه الشروط في استخدامك للموقع الذي يقع على العنوان
            <Link to="/">https://www.hamad-edu.com</Link> وأي خدمات ذات صلة
            تقدمها خدمات التعليم العالي لحمد العزاني.
          </p>
          <p>
            من خلال الوصول إلى <Link to="/">https://www.hamad-edu.com</Link>،
            توافق على الامتثال لهذه الشروط والامتثال لجميع القوانين والتنظيمات
            المعمول بها. إذا لم توافق على هذه الشروط، يُمنع عليك استخدام أو
            الوصول إلى هذا الموقع أو استخدام أي خدمات أخرى تقدمها خدمات التعليم
            العالي لحمد العزاني.
          </p>
          <p>
            نحن، خدمات التعليم العالي لحمد العزاني، نحتفظ بالحق في استعراض
            وتعديل أي من هذه الشروط بمفردنا. عند القيام بذلك، سنقوم بتحديث هذه
            الصفحة. ستكون أي تغييرات على هذه الشروط فعالة فور نشرها.
          </p>
          <p>تم آخر تحديث لهذه الشروط في 11 يناير 2024.</p>
          <h2>قيود الاستخدام</h2>
          <p>
            باستخدام هذا الموقع، تضمن بنفسك، ومستخدميك، والأطراف الأخرى التي
            تمثلها أنك لن تقوم بما يلي:
          </p>
          <ul>
            <li>
              • تعديل، نسخ، إعداد أعمال مشتقة، أو فك تشفير أو عكس هندسة أي مواد
              أو برامج موجودة على هذا الموقع.
            </li>
            <li>
              • إزالة أي حقوق الطبع والنشر أو الإشارات الأخرى الممتلكات من أي
              مواد أو برامج على هذا الموقع.
            </li>
            <li>• نقل المواد إلى شخص آخر أو "عكس" المواد على أي خادم آخر.</li>
            <li>
              • استخدام هذا الموقع أو أي من خدماته المرتبطة بطريقة تعتدي أو تعطل
              شبكاتنا أو أي خدمة أخرى تقدمها خدمات التعليم العالي لحمد العزاني
              بشكل معرف أو غير معرف.
            </li>
            <li>
              • استخدام هذا الموقع أو خدماته المرتبطة لنقل أو نشر أي مواد مضايقة
              أو فاحشة أو فاحشة أو غير قانونية.
            </li>
            <li>
              • استخدام هذا الموقع أو خدماته المرتبطة بخرق أي قوانين أو تنظيمات
              سارية.
            </li>
            <li>
              • استخدام هذا الموقع بتزامن مع إرسال إعلانات غير مصرح بها أو رسائل
              غير مرغوب فيها.
            </li>
            <li>
              • استخدام هذا الموقع أو خدماته المرتبطة بطريقة قد تنتهك خصوصية
              الأشخاص الآخرين أو حقوق الملكية الفكرية أو حقوق الأطراف الثالثة
              الأخرى.
            </li>
          </ul>
          <h2>الملكية الفكرية</h2>
          <p>
            الملكية الفكرية في المواد الموجودة في هذا الموقع مملوكة لـ خدمات
            التعليم العالي لحمد العزاني أو مرخصة لها ومحمية بموجب قوانين حقوق
            الطبع والعلامات التجارية السارية. نمنح مستخدمينا إذنًا بتنزيل نسخة
            واحدة من المواد للاستخدام الشخصي وغير التجاري بشكل عابر.
          </p>
          <p>
            يشكل هذا منحًا لترخيص، وليس نقلًا للملكية. يتم إنهاء هذا الترخيص
            تلقائيًا إذا انتهكت أيًا من هذه القيود أو شروط الخدمة، ويمكن أن يتم
            إنهاءه من قبل خدمات التعليم العالي لحمد العزاني في أي وقت.
          </p>
          <h2>المسؤولية</h2>
          <p>
            يتم توفير موقعنا والمواد على موقعنا على أساس "كما هو". في الحد الذي
            يسمح به القانون، لا تقدم خدمات التعليم العالي لحمد العزاني أي
            ضمانات، صريحة أو ضمنية، وتنكر هنا وتلغي جميع الضمانات الأخرى بما في
            ذلك، دون حد، الضمانات أو الشروط المتضمنة للرواج أو اللياقة لغرض
            معين، أو عدم انتهاك حقوق الملكية الفكرية، أو أي انتهاك آخر للحقوق.
          </p>
          <p>
            في أي حالة، لا تكون خدمات التعليم العالي لحمد العزاني أو مورديها
            مسؤولين عن أي خسارة استثنائية تعانيها أو تتكبدها أنت أو أي طرف ثالث
            ناتجة عن استخدام أو عدم القدرة على استخدام هذا الموقع أو المواد على
            هذا الموقع، حتى لو تم إخطار خدمات التعليم العالي لحمد العزاني أو
            ممثل مفوض بها، شفويًا أو بالكتاب، بإمكانية حدوث مثل هذا الضرر.
          </p>
          <p>
            في سياق هذا الاتفاق، يشمل "الخسارة الاستثنائية" أي خسارة استثنائية،
            أو خسارة غير مباشرة، أو فقدان ربح حقيقي أو متوقع، أو فقدان الفائدة،
            أو فقدان الإيرادات، أو فقدان الأعمال التجارية، أو فقدان السمعة
            الطيبة، أو فقدان الفرصة، أو فقدان التوفير، أو فقدان السمعة، أو فقدان
            الاستخدام و/أو فقدان أو فساد البيانات، سواء بموجب القانون، أو العقد،
            أو المساواة، أو التحقيق (بما في ذلك الإهمال)، أو الضمان أو غير ذلك.
          </p>
          <p>
            نظرًا لأن بعض السلطات القانونية لا تسمح بتقييد الضمانات الضمنية، أو
            تقييد المسؤولية عن الضرر العرضي أو العرضي، قد لا تكون هذه القيود
            قابلة للتطبيق عليك.
          </p>
          <h2>دقة المواد</h2>
          <p>
            المواد المعروضة على موقعنا ليست شاملة وتكون لأغراض معلومات عامة فقط.
            لا تضمن خدمات التعليم العالي لحمد العزاني ولا تقدم أي تصريحات بشأن
            دقة أو نتائج محتملة أو موثوقية استخدام المواد على هذا الموقع، أو
            بشكل آخر يتعلق بتلك المواد أو بأي موارد مرتبطة بهذا الموقع.
          </p>
          <h2>الروابط</h2>
          <p>
            لم تستعرض خدمات التعليم العالي لحمد العزاني جميع المواقع المرتبطة
            بموقعها، ولا تتحمل مسؤولية محتويات أي موقع مرتبط بمثل هذا الموقع. إن
            تضمين أي رابط لا يعني تأييدًا أو موافقة أو تحكمًا من قبل خدمات
            التعليم العالي لحمد العزاني لهذا الموقع. استخدام أي موقع مرتبط مثل
            هذا يكون على مسؤوليتك الشخصية، وننصحك بشدة بإجراء تحقيقاتك الخاصة
            بشأن ملاءمة تلك المواقع.
          </p>
          <h2>الحق في إنهاء</h2>
          <p>
            قد نعلق أو ننهي حقك في استخدام موقعنا وننهي هذه الشروط والخدمات فور
            تلقيك إشعاراً كتابيًا بأي انتهاك لهذه الشروط والخدمات.
          </p>
          <h2>الفصل</h2>
          <p>
            أي شرط في هذه الشروط والخدمات الذي يكون بالكامل أو جزئياً باطلاً أو
            غير قابل للتنفيذ يُفصل إلى حد الباطل أو عدم القابلية للتنفيذ. لا
            يتأثر صحة باقي هذه الشروط والخدمات.
          </p>
          <h2>القانون الساري</h2>
          <p>
            تخضع هذه الشروط والخدمات للقوانين وتفسر وفقًا لها في سلطنة عمان. أنت
            تقدم نفسك بشكل لا رجعة فيه للاختصاص الحصري للمحكمات في تلك الدولة أو
            الموقع.
          </p>
        </>
      )}
    </div>
  );
};

export default TermsOfService;
