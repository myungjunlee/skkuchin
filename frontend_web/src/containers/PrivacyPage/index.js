import React from 'react';
import './style.css';
import icon_back_arrow from '../../image/drawable-xxxhdpi/icon_back_arrow.png';

const PrivacyPage = (props) => {

    const goBack = () => {
        props.windowOff();
    };

    return (
        <div className='privacy_container'>
            <div className='privacy_header'>
                <img src={icon_back_arrow} style={{marginTop: "2.12px", width: "15px", height: "14px", paddingRight: "15px", cursor:"pointer"}} onClick={goBack} />
                <h2>개인정보처리방침</h2>
            </div>
            <div className='privacy_main'>
                <div className='privacy_summary'>
                    스꾸친은 개인정보 보호법에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.
                </div>
                <ul>
                    <li className='privacy_content'>
                        <h4>
                            1. 개인정보의 처리 목적
                        </h4>
                        <div className='privacy_paragraph'>
                            밥약 매칭 서비스를 제공하는 스꾸친은 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는  이용되지 않으며 이용 목적이 변경되는 경우에는 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
                        </div>
                        <div className='privacy_paragraph'>
                            (1) 회원가입 및 관리
                            <br/>
                            회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증, 회원자격 유지·관리, 서비스 부정이용 방지, 각종 고지·통지, 고충처리 목적으로 개인정보를 처리합니다.
                        </div>
                        <div className='privacy_paragraph'>
                            (2) 민원사무 처리
                            <br/>
                            민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락·통지, 처리결과 통보 목적으로 개인정보를 처리합니다.
                        </div>
                        <div className='privacy_paragraph'>
                            (3) 재화 또는 서비스 제공
                            <br/>
                            서비스 제공, 콘텐츠 제공, 본인인증을 목적으로 개인정보를 처리합니다.
                        </div>
                        <div className='privacy_paragraph'>
                            (4) 마케팅 및 광고에의 활용
                            <br/>
                            신규 서비스(제품) 개발 및 맞춤 서비스 제공, 이벤트 및 광고성 정보 제공 및 참여기회 제공 , 서비스의 유효성 확인, 접속빈도 파악 또는 회원의 서비스 이용에 대한 통계 등을 목적으로 개인정보를 처리합니다.
                        </div>
                    </li>
                    <li className='privacy_content'>
                        <h4>
                            2. 개인정보의 처리 및 보유 기간
                        </h4>
                        <div className='privacy_paragraph'>
                            스꾸친은 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 원활한 서비스 제공을 위해 개인정보를 처리·보유합니다.
                        </div>
                        <div className='privacy_paragraph'>
                            각각의 개인정보 처리 및 보유 기간은 수집.이용에 관한 동의일로부터 탈퇴할 때까지 위 이용목적을 위하여 보유·이용됩니다.
                        </div>
                        <div className='privacy_paragraph'>
                            ※ 예외사유
                            <br/>
                            불량 이용자의 경우 탈퇴 후 재가입 방지를 위해 1년간 '학번' 및 '이메일'을 보유합니다.
                        </div>
                    </li>
                    <li className='privacy_content'>
                        <h4>
                            3. 개인정보의 제3자 제공
                        </h4>
                        <div className='privacy_paragraph'>
                            스꾸친은 개인정보를 개인정보의 처리 목적에서 명시한 범위 내에서만 처리하며, 이용자의 사전 동의 없이 동 범위를 초과하여 제공하지 않습니다.
                        </div>
                        <div className='privacy_paragraph'>
                            아이디, 패스워드를 제외한 회원 정보가 제 3자에게 제공되는 실명 시스템이므로, 다른 이용자나 관리자에게 이름, 학과, 학번, MBTI, 프로필 사진에 관한 정보가 보여지거나 전달됩니다.
                        </div>
                    </li>
                    <li className='privacy_content'>
                        <h4>
                            4. 개인정보처리 위탁
                        </h4>
                        <div className='privacy_paragraph'>
                            스꾸친은 정보통신서비스의 제공에 관한 계약을 이행하고 회원의 편의 증진 등을 위하여 추가적인 처리 위탁이 필요한 경우에는 고지 및 동의 절차를 거치지 않을 수 있습니다.다음과 같이 개인정보 처리업무를 위탁하고 있습니다.
                        </div>
                        <div className='privacy_paragraph'>
                            (1) Amazon Web Service: 서비스 시스템 제공, 데이터 관리 및 보관, 회원 관리, 운영 시스템 지원
                            <br/>
                            (2) Google Firebase: 서비스 시스템 제공, 데이터 관리 및 보관, 회원 관리, 운영 시스템 지원
                        </div>
                    </li>
                    <li className='privacy_content'>
                        <h4>
                            5. 정보주체의 권리·의무 및 그 행사방법
                        </h4>
                        <div className='privacy_paragraph'>
                            회원은 언제든지 [마이페이지]를 통해 자신의 개인정보를 조회하거나 수정, 삭제, 탈퇴를 할 수 있습니다.
                        </div>
                    </li>
                    <li className='privacy_content'>
                        <h4>
                            6. 수집하는 개인정보의 항목
                        </h4>
                        <div className='privacy_paragraph'>
                            스꾸친은 서비스 제공을 위해 아래 목록 중 최소한의 개인정보를 수집합니다.
                        </div>
                        <div className='privacy_paragraph'>
                            개인정보 목록
                            <br/>
                            학과, 학번, 아이디, 이메일, 이름, MBTI, 프로필 사진
                        </div>
                    </li>
                    <li className='privacy_content'>
                        <h4>
                            7. 개인정보의 파기
                        </h4>
                        <div className='privacy_paragraph'>
                            스꾸친은 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.
                        </div>
                        <div className='privacy_paragraph'>
                            정보주체로부터 동의받은 개인정보 보유기간이 경과하거나 처리목적이 달성되었음에도 불구하고 다른 법령에 따라 개인정보를 계속 보존하여야 하는 경우에는, 해당 개인정보를 별도의 데이터베이스(DB)로 옮기거나 보관장소를 달리하여 보존합니다. 
                        </div>
                        <div className='privacy_paragraph'>
                            개인정보 파기의 절차 및 방법은 다음과 같습니다.
                        </div>
                        <div className='privacy_paragraph'>
                            (1) 파기절차
                            <br/>
                            스꾸친은 파기 사유가 발생한 개인정보를 선정하고, 스꾸친의 개인정보 보호책임자의 승인을 받아 개인정보를 파기합니다.
                        </div>
                        <div className='privacy_paragraph'>
                            (2) 파기방법
                            <br/>
                            전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용합니다
                        </div>
                    </li>
                    <li className='privacy_content'>
                        <h4>
                            8. 쿠키
                        </h4>
                        <div className='privacy_paragraph'>
                            쿠키란 웹사이트를 운영하는 데 이용되는 서버가 귀하의 브라우저에 보내는 아주 작은 텍스트 파일로서 귀하의 컴퓨터 하드디스크에 저장됩니다. 서비스는 이용자의 성향 파악을 위해 쿠키를 사용할 수 있습니다.
                        </div>
                        <div className='privacy_paragraph'>
                            쿠키 설정 거부 방법 예시
                        </div>
                        <div className='privacy_paragraph'>
                            1) Microsoft Edge: 웹 브라우저 우측 상단의 설정 {'>'} 쿠키 및 사이트 권한
                            <br/>
                            2) Chrome: 웹 브라우저 우측 상단의 설정 {'>'} 개인정보 및 보안 {'>'} 쿠키 및 기타 사이트 데이터
                        </div>
                    </li>
                    <li className='privacy_content'>
                        <h4>
                            9. 개인정보에 관한 책임자 및 서비스
                        </h4>
                        <div className='privacy_paragraph'>
                            스꾸친은 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보보호 담당 부서를 지정하고 있습니다.
                        </div>
                        <div className='privacy_paragraph'>
                            (1) 개인정보보호 담당 부서 : 스꾸친 관리 위원회
                            <br/>
                            (2) 스꾸친 관리 위원회 메일 : <strong>skkuchin@gmail.com</strong>
                        </div>
                        <div className='privacy_paragraph'>
                            ※ 서비스 이용, 접근 제한 등의 문의는 스꾸친 관리 위원회를 통해 처리되지 않습니다. 해당 문의는 [문의하기]를 통해 전달해주시기 바랍니다.
                        </div>
                        <div className='privacy_paragraph'>
                            기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에 문의하시기 바랍니다.
                        </div>
                        <div className='privacy_paragraph'>
                            (1) 개인정보조정위원회 (www.133 6.or.kr / 1336)
                            <br/>
                            (2) 정보보호마크인증위원회 (www.eprivacy.or.kr / 02-580-0533~4)
                            <br/>
                            (3) 대검찰청 인터넷범죄수사센터 (icic.sppo.go.kr / 02-3480-3600)
                            <br/>
                            (4) 경찰청 사이버테러대응센터 (www.ctrc.go.kr / 02-392-0330)
                        </div>
                    </li>
                    <li className='privacy_content'>
                        <h4>
                            10. 기타
                        </h4>
                        <div className='privacy_paragraph'>
                            이 약관은 2022년 1월 6일에 최신화 되었습니다.
                        </div>
                        <div className='privacy_paragraph'>
                            본 약관의 내용 추가, 삭제 및 수정이 있을 경우 개정 최소 7일 전에 ‘공지사항’을 통해 사전 공지를 할 것입니다. 다만, 수집하는 개인정보의 항목, 이용목적의 변경 등과 같이 회원 권리의 중대한 변경이 발생할 때에는 최소 30일 전에 공지하거나, 동의를 다시 받도록 하겠습니다.
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default PrivacyPage;