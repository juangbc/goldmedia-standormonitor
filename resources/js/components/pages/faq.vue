<template>
  <div>
    <el-card>
      <div class="bottom5">
        <el-select v-model="value" placeholder="Select language" class="float-right">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>

      <div v-show="value === 'English'">
        <div class="top20 bot5"><h3 class="header-data no-margin-bot">Frequently asked questions</h3></div>
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title=" General questions:" name="1">
            <div>
              <p><strong><em>Why do you collect streaming data and what exactly does the data tell you?</em></strong>
              </p>
              <p>We collect streaming data because most VoD providers (e.g. Netflix, Prime Video) do not publish reach
                and retrieval figures. Through our VoD ratings platform, it&rsquo;s quick and easy to get a
                comprehensive picture of what does and doesn&rsquo;t work in the world of streaming. In addition to
                title retrievals, we also measure socio-demographics, co-viewing and password sharing.</p>
              <p><strong><em>Are the viewing figures for gross or net reach?</em></strong></p>
              <p>The numbers given for views are for gross reach, as we survey new people every day and so are able to
                better map all streaming usage across its entire breadth. Individual use cannot currently be tracked
                over time; however, we are currently in the process of developing a tool to measure net usage.</p>
              <p><strong><em>Why are the media libraries of individual TV stations not included in the
                figures?</em></strong></p>
              <p>The media libraries of individual TV stations (ARD, ZDF, RTL, ProSieben etc.) are already measured by
                AGF.</p>
              <p><strong><em>Why are slight retrospective changes sometimes made to the reach figures of certain
                titles?</em></strong></p>
              <p>Our system checks every title that has been viewed to see if it really exists on the platform and
                compares it with our database. If a title cannot be clearly assigned, it will first of all be excluded
                from the website until our QA team has reviewed it. If the title has been checked and correctly
                assigned, it will be reactivated for the website. This can lead to a slight retrospective change in the
                reach figures for a title.</p>
              <p><strong><em>Why do the rating figures for streaming providers not correspond to the reported number of
                retrievals?</em></strong></p>
              <p>The VOD Ratings do not record the exact details of the retrieved streams (stream started, stream
                ended), but instead show which people actually watched. This also includes viewers (co-viewing) who
                simply happen to be sitting in front of the device, but who did not start the stream themselves (as with
                TV measurement). We don&rsquo;t measure the number of clicks in the retrievals, but only whether people
                have looked at something regarding a particular service. For each title, viewers are also asked how many
                episodes of a series they have watched, the number of people in front of the screen and which season
                they are watching. The advantage: purely technical retrievals and manipulations by third parties are
                impossible.</p>
              <p>In addition to this, our survey is also heavily based on the viewer&rsquo;s own ability to remember.
                Series in which many episodes are skipped one after the other because the viewer has already seen the
                content (e.g. Big Bang Theory or How I Met Your Mother) correspondingly differ from providers&rsquo;
                reports.</p>
              <p>The content thus reflects conscious use of streaming, which is more significant in terms of content and
                contains less noise than the reports of the VOD providers themselves.</p>
              <p>&nbsp;</p>
              <p><strong><em>Do you sometimes get numbers from the streaming providers?</em></strong></p>
              <p>No, we collect all reach figures on this platform ourselves.</p>
              <p><strong><em>How comparable are the VOD ratings to other studies?</em></strong></p>
              <p>We regularly compare the VOD ratings with other major studies from Germany and England, and we closely
                examine their similarities and differences.</p>
              <p>If you are interested in these comparisons, please contact us directly. We would be happy to send you a
                short presentation on the subject.</p>
              <p><strong><em>How can I get in touch with you?</em></strong></p>
              <p>Simply use the contact form on this page or contact <a href="mailto:research@goldmedia.de">research@goldmedia.de</a>
                . One of our team will then contact you.</p>
              <p><strong><em>I found an error on the website, what can I do?</em></strong></p>
              <p>It's best if you can take a screenshot of the bug and send it to <a
                href="mailto:research@goldmedia.de">research@goldmedia.de</a>, along with a short description of the
                problem. Alternatively, you can also use the contact form on this page.</p>
            </div>
          </el-collapse-item>
          <el-collapse-item title=" Methodology:" name="2">
            <div>
              <p><strong><em>How exactly do you measure streaming usage?</em></strong></p>
              <p>We measure usage through a daily survey in which participants indicate which providers they have access
                to and what content they looked at yesterday. We compare these details with our title database in order
                to ensure accurate title matching.</p>
              <p><strong><em>Is a &ldquo;day after recall&rdquo; survey a suitable method for collecting streaming
                data?</em></strong></p>
              <p>The &ldquo;day after recall&rdquo; model has clear advantages over other methods of measurement:<br/>
              </p>
              <p>In contrast to all other methods, it has the advantage of working equally well for all access paths,
                regardless of the viewer&rsquo;s technical setting (smart TV, laptop, PC, OTT device, set-top box).&nbsp;</p>
              <p><br/> In contrast to audiomatching, titles are also displayed that are completely new to the suppliers&rsquo;
                catalog or that are viewed with headphones. In addition, this method is protected more effectively
                against confusion with illegal use.</p>
              <p>Passive measurement (i.e. the automatic reading of surfing behavior) usually has difficulties measuring
                mobile use and use via smart TVs, which now account for almost 60% of the usage volume. It also doesn&rsquo;t
                record how many viewers looked at the screen at the same time (co-viewing).</p>
              <p>&ldquo;Day after recall&rdquo; has one weakness, but this is also its strength: Since the measurement
                is based on the viewer&rsquo;s ability to remember, the titles that were attentively watched are given
                greater prominence.</p>
              <p><strong><em>Why do you survey new users every day instead of using a fixed panel?</em></strong></p>
              <p>The VOD ratings are extremely flexible due to this surveying method, and so can quickly identify market
                changes and trends. It also means there is virtually no panel bias.</p>
              <p><strong><em>How long does a sample period need to be for the figures to be reliable?</em></strong></p>
              <p>In general, the smaller the evaluation basis, the larger the statistical error. We therefore recommend
                an analysis period of no less than 7 days.</p>
              <p><strong><em>How do you ensure the quality of the panel?</em></strong></p>
              <p>We only work with certified panel providers. The information provided by the participants is checked in
                detail in the system before they are made available to the website.</p>
              <p>At the end of the survey there is always a list of the titles available on the platform, which is
                constantly updated so that no titles that are not available on the platform can be specified in the
                survey. All responses we receive are automatically checked again for plausibility in the backend, but we
                also manually check whether the system is working correctly and intervene if we perceive that something
                isn&rsquo;t working correctly or we receive feedback from customers that something is wrong.</p>
              <p><strong><em>How are the reach figures for kids measured?</em></strong></p>
              <p>Children under the age of 14 are not allowed to be interviewed in the EU, so we ask parents if they can
                give us information about their children&rsquo;s streaming use.</p>
              <p><strong><em>Can the questionnaire be viewed?</em></strong></p>
              <p>The questionnaire is an important part of our business, so we will not publish it on our website. But
                it&rsquo;s no secret and we are happy to discuss the questionnaire with our customers if required.</p>
              <p><strong><em>Is it possible to display somewhere the number of times a particular title is
                mentioned?</em></strong></p>
              <p>Yes, all customers can access the absolute number of entries per title from the survey via our API.</p>
            </div>
          </el-collapse-item>
          <el-collapse-item title=" Catalog data:" name="3">
            <div>
              <p><strong><em>How do you get your catalog data?</em></strong></p>
              <p>We use various public and private sources to keep our catalog data up to date, and we combine various
                data sources to guarantee the most complete coverage possible. The catalog data is updated every
                night.</p>
              <p><strong><em>Why are there sometimes details missing about certain titles (e.g. &ldquo;production
                company&rdquo;)?</em></strong></p>
              <p>Due to allocation errors, there may be a gap in our system from time to time, but this will be
                corrected within 24 hours of the next update. If there is a permanent problem with the information on a
                title, please send us a message using the contact form.</p>
              <p><strong><em>How exactly do &ldquo;Access,&rdquo; &ldquo;User&rdquo; and &ldquo;Subscriber&rdquo; differ
                from each other?</em></strong></p>
              <p><strong>ACCESS</strong> (Access to Platform): Persons that have access to an S-VoD platform.</p>
              <p><strong>SUBSCRIPTIONS:</strong> Persons that actually pay for the S-VoD subscription (one person can
                have more than one subscription).</p>
              <p><strong>USER:</strong> Persons that use content in a given time interval.</p>
              <p><strong><em>How is the &ldquo;Dropout Rate&rdquo; calculated and what does it say?</em></strong></p>
              <p>We ask all VOD users how long they have watched the title (&ldquo;watched for a short time,&rdquo;
                &ldquo;watched up to half,&rdquo; &ldquo;watched the whole thing&rdquo;). In this way, we can estimate
                what percentage of the audience stopped watching before the end.</p>
              <p><strong><em>How are &ldquo;Net Reach&rdquo; and &ldquo;Viewing Time&rdquo; calculated?</em></strong>
              </p>
              <p>Net Reach: Through a representative survey, we can determine how many online users in one country used
                VOD in one day. Starting from this group (VOD users), the various services can then be calculated
                proportionately. Viewing Time: We ask all VOD users how long they have watched the title (&ldquo;watched
                for a short time,&rdquo; &ldquo;watched up to half,&rdquo; &ldquo;watched the whole thing&rdquo;). This
                is combined with our catalog data, which includes the running times of all titles. In this way, we can
                estimate how long a title was watched for.</p>
              <p><strong><em>How is the &ldquo;Churn Rate&rdquo; or, better put, &ldquo;Churn Risk&rdquo;
                calculated?</em></strong></p>
              <p>Churn Risk is based on the question &ldquo;Do you intend to cancel the service next month,&rdquo; and
                therefore indicates the customer&rsquo;s intention to cancel. We know from our research that this does
                not necessarily lead to termination, but it gives an impression of how satisfied customers are with the
                service. A strongly fluctuating Churn Risk also points to a strongly action-based business model.</p>
              <p><strong><em>Why do smaller titles sometimes have such high retrieval numbers?</em></strong></p>
              <p>Due to our survey method, it is not possible to present the entire long-tail in detail, as this would
                almost need its own complete survey. We therefore calculate the smaller titles with relatively high
                retrieval numbers, as they are representative of a number of titles that cannot be displayed. This can
                lead to higher levels of deviation for smaller titles, but is extremely plausible in terms of
                aggregation, e.g. for genres. The larger a title is and the longer the chosen survey period, the better
                the extrapolation will be.</p>

            </div>
          </el-collapse-item>
          <el-collapse-item title=" Further development of ratings" name="4">
            <div>
              <p><strong><em>Are any countries other than Germany and the UK also covered?</em></strong></p>
              <p>Additional countries are planned. If you urgently need data for other countries, we can speed up the
                production process. Please do not hesitate to contact us.</p>
              <p><strong><em>We need other figures for our company. Can you collect them?</em></strong></p>
              <p>We are always ready to bring new evaluations and features to the platform for our customers.</p>
              <p>If you need some evaluations done urgently, we can prioritize accordingly. Please do not hesitate to
                contact us.</p>
            </div>
          </el-collapse-item>
          <el-collapse-item title=" API" name="5">
            <div>
              <p><strong><em>What is an API?</em></strong></p>
              <p>&ldquo;A programming interface, more precisely an interface for application programming, often called
                an API for short, is a part of a program that is made available by a software system to other programs
                for connection to the system.&rdquo; &ndash; Wikipedia (DE). With our API, you can integrate all the
                data you find on the platform into your own systems and perform your own evaluations. If you need an
                introduction to our API, please let us<em> know.</em></p>
              <p><strong><em>How do I get access to the API?</em></strong></p>
              <p>Each account has an API key that is required for access. You can find this in your account
                settings.</p>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>

      <div v-show="value === 'German'">
        <div class="top20 bot5"><h3 class="header-data no-margin-bot">Frequently asked questions</h3></div>
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title=" Allgemeine Fragen:" name="1">
            <div>
              <p><strong><em>Warum erhebt ihr Streaming-Daten und was genau sagen die Daten aus?</em></strong></p>
              <p>Wir erheben Streaming Daten, weil die meisten VoD-Anbieter (z.B. Netflix, Prime Video) keine
                Reichweiten- und Abrufzahlen ver&ouml;ffentlichen. &Uuml;ber unsere VoD-Ratings-Plattform ist es
                schnell und einfach m&ouml;glich, einen umfassenden Eindruck davon zu bekommen, welche Dinge in der
                Streaming Welt funktionieren und welche nicht. Wir messen dabei neben den Titelabrufen auch
                Soziodemografien,
                Co-Viewing oder Password-Sharing.</p>
              <p><strong><em>Handelt es sich bei den Views um Brutto oder Nettoreichweiten?</em></strong></p>
              <p>Die Views sind Bruttoreichweiten, da wir t&auml;glich neue Personen befragen und so die gesamte
                Streaming
                Nutzung in ihrer ganzen Breite besser abbilden k&ouml;nnen. Die Nutzung von Einzelpersonen l&auml;sst
                sich
                somit
                nicht &uuml;ber einen l&auml;ngeren Zeitraum verfolgen. Wir sind jedoch momentan dabei, auch ein Tool
                zur
                Messung
                der Nettonutzung zu entwickeln.</p>
              <p><strong><em>Wieso werden die Mediatheken der TV-Sender nicht mitgemessen?</em></strong></p>
              <p>Die Mediatheken der TV-Sender (ARD, ZDF, RTL, ProSieben etc.) werden bereits von der AGF gemessen.</p>
              <p><strong><em>Wieso ver&auml;ndert sich manchmal die Reichweite von Titeln noch leicht?</em></strong></p>
              <p>Unser System pr&uuml;ft bei jedem Titel der geschaut wurde, ob er auf der Plattform wirklich vorhanden
                ist
                und
                gleicht diesen mit unserer Datenbank ab. Wenn ein Titel nicht eindeutig zugeordnet werden kann, wird er
                zun&auml;chst
                von der Website ausgeschlossen, bis unser QA Team den Titel &uuml;berpr&uuml;ft hat. Wenn der Titel
                kontrolliert
                und richtig zugeordnet wurde, wird er f&uuml;r die Website freigeschaltet. Dies kann im Nachinein dazu f&uuml;hren,
                dass sich die Reichweiten leicht ver&auml;ndern.</p>
              <p><strong><em>Wieso stimmen die Zahlen der Ratings nicht mit den Abrufzahlen der Streaminganbieter &uuml;berein,
                die wir reported bekommen?</em></strong></p>
              <p>Die VOD Ratings bilden nicht exakt die abgerufenen Streams (stream sarted, stream ended) ab, sondern
                zeigen
                die Personen,
                die tats&auml;chlich geschaut haben. Dazu z&auml;hlen auch Zuschauer (co-viewing), die einfach nur vor
                dem
                Ger&auml;t
                sitzen, aber selber den Stream nicht gestartet haben (wie bei der Fernsehmessung). &nbsp;Wir messen bei
                den
                Abrufen keine Klickzahlen,
                sondern nur, ob die Leute etwas &uuml;ber einen bestimmten Dienst geschaut haben. Es wird zudem pro
                Titel
                abgefragt, wie viele Folgen
                von einer Serie geschaut wurden, Anzahl der Leute vor dem Bildschirm und um welche Staffel es sich
                handelt.
                Vorteil: Somit sind rein
                technische Abrufe und Manipulationen von Dritten ausgeschlossen.</p>
              <p>Zudem basiert unsere Befragung stark auf dem Erinnerungsverm&ouml;gen der Zuschauer. Serien, bei der
                viele
                Folgen nacheinander geskippt
                werden, weil der Zuschauer die Inhalte schon gesehen hat (bspw. bei der Big Bang Theory oder How I Met
                Your
                Mother), unterscheiden sich
                demensprechend mitunter von den Reportings der Anbieter.</p>
              <p>Die Inhalte spiegeln also die Bewusste Streaming-Nutzung wieder, welche inhaltlich bedeutender ist und
                weniger Rauschen enth&auml;lt,
                als die Reportings der VOD-Anbieter selber.</p>
              <p><strong><em>Bekommt ihr manchmal Zahlen von den Streaminganbietern geliefert?</em></strong></p>
              <p>Nein, wir erheben alle Reichweiten auf dieser Plattform selber.</p>
              <p><strong><em>Wie vergleichbar sind die VOD-Ratings zu anderen Studien?</em></strong></p>
              <p>Wir vergleichen die VOD-Ratings regelm&auml;&szlig;ig mit anderen gr&ouml;&szlig;eren Studien aus
                Deutschland und England und schauen uns die Gemeinsamkeiten und Unterschiede genau an.</p>
              <p>Wenn Sie an diesen Vergleichen interessiert sind, schreiben Sie uns gerne direkt an. Wir schicken Ihnen
                eine kleine Pr&auml;sentation zu dem Thema gerne zu.</p>
              <p><strong><em>Wie kann ich mit euch in Kontakt treten?</em></strong></p>
              <p>Nutzen Sie einfach das Kontaktformular auf dieser Seite oder melden Sie sich bei <a
                href="mailto:research@goldmedia.de" style="color: black">research@goldmedia.de</a>.
                Ein Mitarbeiter wird dann mit Ihnen Kontakt aufnehmen.</p>
              <p><strong><em>Ich habe einen Fehler auf der Website gefunden, was kann ich tun?</em></strong></p>
              <p>Machen Sie am besten ein Screenshot von dem Bug und schicken Sie diesen mit einer kurzen Beschreibung
                des
                Problems an <a href="mailto:research@goldmedia.de">research@goldmedia.de</a> . Alternativ k&ouml;nnen
                Sie
                auch das Kontaktformular auf dieser Seite benutzen.</p>
            </div>
          </el-collapse-item>
          <el-collapse-item title=" Methodik:" name="2">
            <div>
              <p><strong><em>Wie genau messt ihr die Streaming-Nutzung?</em></strong></p>
              <p>Wir messen die Nutzung durch eine t&auml;gliche Befragung, bei der die Teilnehmer angeben, zu welchen
                Anbietern Sie einen Zugang haben und welche Inhalte sie gestern genau geschaut haben. Diese Angaben
                gleichen
                wir mit unserer Titeldatenbank ab, um eine genaue Zuordnung der Titel zu erm&ouml;glichen.</p>
              <p><strong><em>Ist eine "Day After Recall"-Befragung eine geeignete Erhebungsmethode von
                Streaming-Daten?</em></strong>
              </p>
              <p>Der &bdquo;Day After Recall&ldquo; hat klare Vorteile gegen&uuml;ber anderen Messmethoden:<br/><br/>
              </p>
              <p>Im Gegensatz zu allen anderen Messungen hat dieses Verfahren den Vorteil, dass es f&uuml;r alle
                Zugangswege
                gleicherma&szlig;en funktioniert, unabh&auml;ngig vom technischen Setting des Zuschauers (Smart-TV,
                Laptop,
                PC, OTT-Device, Set-Top-Box).&nbsp;</p>
              <p><br/>Im Gegensatz zum Audiomatching werden auch Titel abgebildet, die ganz neu im Katalog der Anbieter
                aufgeschaltet werden oder die mit Kopfh&ouml;rern geschaut werden. Zudem ist die Methodik robuster gegen&uuml;ber
                Verwechslung mit illegaler Nutzung.</p>
              <p>Die passive Messung (also das maschinelle Auslesen von Surfverhalten) kann in der Regel nur schwer die
                mobile Nutzung und die Nutzung &uuml;ber Smart-TVs messen, die mittlerweile fast 60% des Nutzungsvolumen
                ausmacht. Zudem wird nicht erfasst, wie viele Zuschauer vor dem Bildschirm geschaut haben.</p>
              <p>Die einzige Schw&auml;che des &bdquo;Day after Recall&ldquo; ist auch gleichzeitig seine St&auml;rke:
                Da
                wir uns f&uuml;r die Messung auf das Erinnerungsverhalten der Zuschauer st&uuml;tzen, werden die Titel
                st&auml;rker
                in den Vordergrund ger&uuml;ckt, die bewusst geschaut wurden.</p>
              <p><strong><em>Wieso befragt ihr t&auml;glich neue Nutzer und nutzt kein festes Panel?</em></strong></p>
              <p>Die VOD-Ratings sind durch diese Art der Befragung extrem flexibel und k&ouml;nnen schnell Marktver&auml;nderungen
                und Trends erkennen. Zudem gibt es so gut wie keinen Panel Bias.</p>
              <p><strong><em>Ab welchem Zeitraum sind die Zahlen verl&auml;sslich?</em></strong></p>
              <p>Generell gilt, je kleiner die Auswertungsbasis, desto gr&ouml;&szlig;er der Statistische Fehler. Wir
                empfehlen deswegen, den Analysezeitraum nicht kleiner als 7 Tage auszuw&auml;hlen.</p>
              <p><strong><em>Wie stellt ihr die Qualit&auml;t des Panels sicher?</em></strong></p>
              <p>Wir arbeiten nur mit zertifizierten Panelanbietern zusammen. Die Angaben der Teilnehmer werden im
                System
                genau gepr&uuml;ft, bevor Sie auf die Website geschaltet werden.</p>
              <p>Hinter der Abfrage steht immer eine Liste mit den Titeln, die auf der Plattform vorhanden sind, die st&auml;ndig
                aktualisiert wird. Es k&ouml;nnen also in der Befragung keine Titel angegeben werden, die nicht auf der
                Plattform vorhanden sind. Alle eingegangenen Antworten werden im Backend erneut automatisch auf
                Plausibilit&auml;t
                gepr&uuml;ft. Trotzdem pr&uuml;fen wir zus&auml;tzlich manuell, ob das System korrekt arbeitet und
                greifen
                ein, falls etwas nach unserer Wahrnehmung schiefl&auml;uft oder wir Feedback von Kunden bekommen, dass
                etwas
                grunds&auml;tzlich falsch ist.</p>
              <p><strong><em>Wie werden die Kids-Reichweiten erhoben?</em></strong></p>
              <p>Kinder unter 14 Jahren d&uuml;rfen in der EU nicht befragt werden, deswegen fragen wir die Eltern, ob
                Sie
                uns Angaben zur Streamingnutzung ihrer Kinder machen k&ouml;nnen.</p>
              <p><strong><em>Kann der Fragebogen eingesehen werden?</em></strong></p>
              <p>Der Fragebogen ist ein wichtiger Teil unseres Gesch&auml;fts, deswegen werden wir Ihn nicht &ouml;ffentlich
                auf die Seite stellen. Er ist jedoch auch kein besonderes Geheimnis und wir sprechen den Fragebogen bei
                Bedarf gerne mit unseren Kunden durch.</p>
              <p><strong><em>Kann man irgendwo die Fallzahl der Nennungen pro Titel anzeigen?</em></strong></p>
              <p>Ja, die absoluten Nennungen pro Titel aus der Befragung k&ouml;nnen alle Kunden &uuml;ber unsere API
                abrufen.</p>
            </div>
          </el-collapse-item>
          <el-collapse-item title=" Katalogdaten:" name="3">
            <div><p><strong><em>Wie kommt ihr an die Katalogdaten?</em></strong></p>
              <p>Wir nutzen diverse &ouml;ffentlichen Quellen und private, um unsere Katalogdaten auf dem neusten Stand
                zu
                halten und verbinden die verschiedenen Datenquellen, um eine m&ouml;glichst l&uuml;ckenlose Abdeckung zu
                garantieren. Die Katalogdaten werden jede Nacht aktualisiert.</p>
              <p><strong><em>Wieso fehlen manchmal Details zu bestimmten Titeln (bspw. "production
                company")?</em></strong>
              </p>
              <p>Es kann in unserem System aufgrund von Zuordnungsfehlern ab und zu eine L&uuml;cke entstehen, die sich
                aber
                bei dem n&auml;chsten Update innerhalb von 24 Stunden selbst behebt. Sollte es ein dauerhaftes Problem
                mit
                den Informationen zu einem Titel geben, schicken Sie uns bitte eine Nachricht &uuml;ber das
                Kontaktformular.</p>
              <p><strong><em>Wie genau unterscheiden sich bei euch "Access", "User" und "Subscriber"?</em></strong></p>
              <p><strong>ACCESS</strong> (Access to Platform): Persons that have access to a S-VoD platform.</p>
              <p><strong>SUBSCRIPTIONS:</strong> Persons that actually pay for the S-VoD subscription (one person can
                have
                more than one subscription).</p>
              <p><strong>USER:</strong> Persons that use content in a given time interval.</p>
              <p><strong><em>Wie wird die "Dropout Rate" berechnet und was sagt sie aus?</em></strong></p>
              <p>Wir fragen alle VOD Nutzer, ob wie lange sie den Titel ungef&auml;hr angeschaut haben (&bdquo;kurz
                reingeschaltet&ldquo;, &bdquo;bis zur H&auml;lfte&ldquo;, &bdquo;ganz angeschaut&ldquo;). So k&ouml;nnen
                wir
                sch&auml;tzen, wieviel Prozent der Zuschauer vor dem Ende aufgeh&ouml;rt haben.</p>
              <p><strong><em>Wie werden "Net Reach" und "Viewing Time" berechnet?</em></strong></p>
              <p>Net Reach: Durch repr&auml;sentative Befragung k&ouml;nnen wir feststellen, wieviele Onliner in einem
                Land
                an einem Tag VOD genutzt haben. Von dieser Gruppe (VOD Nutzer) ausgehend, lassen sich dann die
                verschiedenen
                Services anteilig berechnen. Viewing Time: Wir fragen alle VOD Nutzer, ob wie lange sie den Titel ungef&auml;hr
                angeschaut haben (&bdquo;kurz reingeschaltet&ldquo;, &bdquo;bis zur H&auml;lfte&ldquo;, &bdquo;ganz
                angeschaut&ldquo;). Dies wird kombiniert mit unseren Katalogdaten, welche die Laufzeiten aller Titel
                beinhaltet. So k&ouml;nnen wir sch&auml;tzen, wie lange ein Titel angeschaut wurde.</p>
              <p><strong><em>Wie wird die "Churn Rate" oder besser &bdquo;Churn Risk&ldquo; berechnet?</em></strong></p>
              <p>Die Churn Risk basiert auf der Frage &bdquo;Haben Sie vor, den Service im n&auml;chsten Monat zu k&uuml;ndigen&ldquo;
                und stellt deswegen die Absicht der Kunden da, zu k&uuml;ndigen. Aus der Forschung wissen wir, dass das
                nicht unbedingt tats&auml;chlich zu einer K&uuml;ndigung f&uuml;hrt, aber einen Eindruck &uuml;ber die
                Zufriedenheit der Kunden mit dem Service gibt. Ein stark schwankendes Churn Risk weist zudem auf ein
                stark
                aktionsbasiertes Gesch&auml;ftsmodell hin.</p>
              <p><strong><em>Warum haben kleinere Titel teilweise so hohe Abrufzahlen?</em></strong></p>
              <p><em>Durch unsere Befragungsmethode ist es nicht m&ouml;glich, den gesamten Longtail im Detail
                darzustellen.
                Hierf&uuml;r br&auml;uchte man nahezu eine Vollerhebung. Wir berechnen deswegen die kleineren Titel mit
                relativ hohen Abrufzahlen, da sie exemplarisch f&uuml;r eine Reihe von Titeln stehen, die nicht
                abgebildet
                werden k&ouml;nnen. Dies kann bei kleineren Titeln zu h&ouml;heren Abweichungen f&uuml;hren, ist aber in
                der
                Aggregation bspw. bei Genres wieder extrem plausibel. Umso gr&ouml;&szlig;er ein Titel ist und umso l&auml;nger
                der gew&auml;hlte Zeitraum, desto besser wird auch die Hochrechnung.</em></p>
            </div>
          </el-collapse-item>
          <el-collapse-item title=" Weiterentwicklung der Ratings" name="4">
            <div><p><strong><em>Werden noch andere L&auml;nder au&szlig;er Deutschland und UK abgedeckt?</em></strong>
            </p>
              <p><em>Weitere L&auml;nder sind in Planung. Wenn Sie dringend Daten f&uuml;r weitere L&auml;nder brauchen,
                k&ouml;nnen
                wir gerne den Produktionsprozess beschleunigen. Kontaktieren Sie uns dazu gerne.</em></p>
              <p><strong><em>Wir brauchen f&uuml;r unser Unternehmen noch andere Kennzahlen, k&ouml;nnt ihr diese
                erheben?</em></strong></p>
              <p><em>Wir sind immer bereit, f&uuml;r unsere Kunden neue Auswertungen und Features auf die Plattform zu
                bringen.</em></p>
              <p><em>Sollten Sie einige Auswertungen dringend ben&ouml;tigen, k&ouml;nnen wir entsprechen priorisieren.
                Kontaktieren sie uns dazu gerne.</em></p>
            </div>
          </el-collapse-item>
          <el-collapse-item title=" API" name="5">
            <div><p><strong><em>Was ist eine API?</em></strong></p>
              <p><em>&bdquo;Eine Programmierschnittstelle, genauer Schnittstelle zur Anwendungsprogrammierung, h&auml;ufig
                nur kurz API genannt, ist ein Programmteil, der von einem Softwaresystem anderen Programmen zur
                Anbindung
                an
                das System zur Verf&uuml;gung gestellt wird.&ldquo; &ndash; WikipediaMit unserer API k&ouml;nnen Sie
                alle
                Daten, die Sie auf der Plattform finden, in Ihre eigenen Systeme integrieren und eigene Auswertungen
                durchf&uuml;hren.
                Wenn Sie eine Einf&uuml;hrung in unsere API brauchen, sagen Sie uns gerne Bescheid.</em></p>
              <p><strong><em>Wie bekomme ich Zugang zur API?</em></strong></p>
              <p><em>Jeder Account hat einen API-Key, der f&uuml;r den Zugang ben&ouml;tigt wird. Diesen finden Sie in
                Ihren
                Accounteinstellungen.</em></p>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </el-card>
  </div>

</template>

<script>

export default {
  data () {
    return {
      activeNames: ['1'],
      options: [{
        value: 'English',
        label: 'English'
      },
      {
        value: 'German',
        label: 'German'
      }],
      value: 'English'
    }
  },
  methods: {
    handleChange (val) {
    }
  },
  mounted() {

  }
}
</script>

<style scoped>

  .el-collapse-item__arrow {
    float: left;
    width: 1rem;
    text-align: center;
  }

  .bottom5 {
    margin-bottom: 5%;
  }
</style>
