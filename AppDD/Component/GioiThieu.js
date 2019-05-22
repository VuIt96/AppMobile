import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Header, Left, Right, Icon,Button } from 'native-base';
export default class GioiThieu extends React.Component {
    static navigationOptions = {
        drawerIcon: () => (
            <Icon name="information-circle-outline" style={{color:'steelblue' }} />
        )
    };
    render() {
        //console.log(this.props.navigation.state.params.thamso);
        return (

            <View>
                <View style={{ height: 24, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }}>
                </View>
                <Header style={{ backgroundColor: '#bdc3c7', height: 50 }}>
                    <Left style={{ left: -5 }}>
                        <Button transparent onPress={() => this.props.navigation.navigate('Trang chủ')}>
                            <Icon
                                name='arrow-back' />
                        </Button>
                    </Left>
                    <Right>
                        <Text  style={{ fontSize: 20, textAlign: 'center', top: 3, color: 'seagreen' }}>Giới thiệu</Text>
                    </Right>
                </Header>
                <Image style={{ width: 355, height: 55 }} source={require('./img/logokhoa.png')} />
                <ScrollView>
                    <View style={{ flex: 1 }}>
                        <View>
                            <Text style={{ fontSize: 15, color: 'blue' }}>I. GIỚI THIỆU CHUNG</Text>
                            <Text style={{ fontStyle: 'italic', fontSize: 11 }}>  Khoa CNTT-TT được tách từ khoa KTCN ngày 1/4/2009. Nhiệm vụ cơ bản: (1) Đào tạo nguồn nhân lực các ngành Công nghệ thông tin và Truyền thông phục vụ nhu cầu công nghiệp hoá, hiện đại hoá của tỉnh và đất nước; (2) Nghiên cứu cơ bản và ứng dụng để hợp tác và tham mưu các vấn đề về phát triển và ứng dụng CNTT cho nhà trường, cho tỉnh Thanh Hoá.....</Text>
                            <View>
                                <Text style={{ color: 'midnightblue' }}>1. Ban chủ nhiệm Khoa</Text>
                                <View>
                                    <Text style={{ fontSize: 11 }}>+ TS. Phạm Thế Anh (TK), DĐ: 0941.070.715. Email: phamtheanh@hdu.edu.vn</Text>
                                    <Text style={{ fontSize: 11 }}>+ TS. Trịnh Viết Cường (PTK), DĐ: 0915.901.935. Email: trinhvietcuong@hdu.edu.vn</Text>
                                    <Text style={{ fontSize: 11 }}>+ TS. Nguyễn Thế Cường (PTK),Email: nguyenthecuong@hdu.edu.vn</Text>
                                </View>
                                <Text style={{ color: 'midnightblue' }}>2. Đội ngũ cán bộ, giảng viên, sinh viên</Text>
                                <View>
                                    <Image style={{ height: 200 }} source={{ uri: 'http://hdu.edu.vn/SlideShow/2017428231434TK1.jpg' }} />
                                    <Text style={{ fontSize: 11 }}>+ Tổng số cán bộ giảng viên: 25</Text>
                                    <Text style={{ fontSize: 11 }}>+ Tiến sĩ: 04</Text>
                                    <Text style={{ fontSize: 11 }}>+ Thạc sĩ: 11</Text>
                                    <Text style={{ fontSize: 11 }}>+ Nghiên cứu sinh: 02</Text>
                                    <Text style={{ fontSize: 11 }}>+ Đại học: 08</Text>
                                    <Text style={{ fontSize: 11 }}>+ Số sinh viên thường xuyên: 350 sinh viên.</Text>
                                </View>
                                <Text style={{ color: 'midnightblue' }}>3. Các tổ bộ môn và cơ sở vật chất</Text>
                                <View>
                                    <Text style={{ fontSize: 11 }}>+ Khoa có 4 bộ môn chuyên ngành: Khoa học máy tính, Kỹ thuật máy tính và truyền thông, Các hệ thống thông tin, và Tin học ứng dụng.</Text>
                                    <Text style={{ fontSize: 11 }}>+ 7 phòng máy tính (240 máy).</Text>
                                </View>
                                <Text style={{ color: 'midnightblue' }}>4. Các bậc và ngành nghề đào tạo</Text>
                                <View>
                                    <Text style={{ fontSize: 11 }}>+ Đại học CNTT - Chính quy </Text>
                                    <Text style={{ fontSize: 11 }}>+ Văn bằng 2 CNTT</Text>
                                    <Text style={{ fontSize: 11 }}>+ Liên thông ĐH CNTT từ CĐ và TC</Text>
                                    <Text style={{ fontSize: 11 }}>+ Cao đẳng CNTT</Text>
                                    <Text style={{ fontSize: 11 }}>+ Cử nhân ĐH Toán-Tin</Text>
                                    <Text style={{ fontSize: 11 }}>+ Cao đẳng sư phạm Toán - Tin </Text>
                                </View>
                                <Text style={{ color: 'midnightblue' }}>5. Công tác nghiên cứu khoa học</Text>
                                <Text style={{ fontSize: 11 }}>   Đây là một hoạt động quan trọng của khoa. Nhiều đề tài của khoa đang được ứng dụng có hiệu quả trong trường.  nhiều công trình khoa học của CBGD trong khoa đã được đăng ở các tạp chí chuyên ngành ngoài nước. Một số chương trình trọng tâm trong năm học tới gồm:</Text>
                                <View>
                                    <Text style={{ fontSize: 11, left: 5 }}>+ Tiếp tục phát triển đội ngũ CBGD có trình độ cao thông qua việc bồi dưỡng và dự án đào tạo nước ngoài.</Text>
                                    <Text style={{ fontSize: 11, left: 5 }}>+ Tham gia thực hiện đề tài khoa học các cấp: Tỉnh, Bộ, Nhà nước, và hợp tác song phương với Đài Loan.</Text>
                                    <Text style={{ fontSize: 11, left: 5 }}>+ Triển khai các phần mềm ứng dụng và khai thác, giảng dạy và phát triển các phần mềm nguồn mở phục vụ giảng dạy đại học và phổ thông.</Text>
                                    <Text style={{ fontSize: 11, left: 5 }}>+ Nghiên cứu và thực hiện các chương trình phục vụ Tin học hoá một số hoạt động trong nhà trường.</Text>
                                    <Text style={{ fontSize: 11, left: 5 }}>+ Liên kết với các viện, các trường, các doanh nghiệp và các tổ chức trong và ngoài nước trong nghiên cứu khoa học, trong lĩnh vực công nghệ thông tin.</Text>
                                    <Text style={{ fontSize: 11, left: 5 }}>+ Nghiên cứu ứng dụng và chuyển giao công nghệ trong lĩnh vực công nghệ thông tin.</Text>
                                    <Text style={{ fontSize: 11, left: 5 }}>+  Dịch vụ khoa học công nghệ: tư vấn triển khai phát triển dự án phần mềm, các dịch vụ an ninh mạng, tư vấn giải pháp công nghệ thông tin trong các doanh nghiệp, cơ quan,…</Text>

                                </View>
                            </View>
                            <View>
                                <Text style={{ fontSize: 15, color: 'blue' }}>II. Giới thiệu về bộ môn Tin ứng dụng</Text>
                                <View>
                                    <Text style={{ color: 'midnightblue' }}>1. Chức năng, nhiệm vụ</Text>
                                    <View>
                                        <Text style={{ fontSize: 11 }}>+ Giảng dạy các môn: Tin đại cương, Tin ứng dụng cho các hệ ngành đào tạo trong trường.</Text>
                                        <Text style={{ fontSize: 11 }}>+ Nghiên cứu khoa học: tổ chức các hoạt động NCKH với mục tiêu nghiên cứu để nâng cao chất lượng giảng dạy, để xây dựng và phát triển đội ngũ, để ứng dụng thực tế phục vụ các nhiệm vụ kinh tế - xã hội… </Text>
                                        <Text style={{ fontSize: 11 }}>+ Chuyển giao các kết quả nghiên cứu vào ứng dụng thực tế.</Text>
                                    </View>
                                    <Text style={{ color: 'midnightblue' }}>2. Cơ cấu tổ chức: hiện tại bộ môn có 6 cán bộ</Text>
                                    <View>
                                        <Image style={{ height: 200 }} source={{ uri: 'http://hdu.edu.vn/NewsImages/20174292130299.jpg' }} />
                                        <Text style={{ fontSize: 11 }}>1. ThS. Lê Thị Hồng, Phó trưởng bộ môn, phụ trách bộ môn </Text>
                                        <Text style={{ fontSize: 11 }}>2. TS. Phạm Thế Anh, Phó trưởng bộ môn - Trưởng khoa.  </Text>
                                        <Text style={{ fontSize: 11 }}>3. KS. Dương Thị Dung, Giảng viên</Text>
                                        <Text style={{ fontSize: 11 }}>4. KS. Phạm Thị Hồng, Giảng viên</Text>
                                        <Text style={{ fontSize: 11 }}>4. CN. Lê Thị Thu Trang, GV thực hành.</Text>
                                        <Text style={{ fontSize: 11 }}>6. CN. Nguyễn Đình Thịnh, Giảng viên.</Text>
                                    </View>
                                    <Text style={{ color: 'midnightblue' }}>3. Chiến lược phát triển của bộ môn</Text>
                                    <View>
                                        <Text style={{ fontSize: 11 }}>+ Về nhân sự: tiếp tục bồi dưỡng và đào tạo để nâng cao năng lực cho đội ngũ giảng  viên của bộ môn.</Text>
                                        <Text style={{ fontSize: 11 }}>+ Nâng cao năng lực thực hành các phần mềm cơ bản trong máy tính để phục vụ cho công tác nghiên cứu và giảng dạy của Bộ môn cũng như của Khoa.</Text>
                                        <Text style={{ fontSize: 11 }}>+ Tập trung nghiên cứu khoa học triển khai ứng dụng thực tế, tham gia dự án Phần mềm nguồn mở và Chương trình Sinh viên tình nguyện đưa Ứng dụng công nghệ thông tin cho vùng sâu, vùng xa trong Tỉnh TH của trường.</Text>
                                    </View>
                                    <Text style={{ color: 'midnightblue' }}>5. Công tác nghiên cứu khoa học</Text>
                                    <View>
                                        <Text style={{ fontSize: 11, left: 5 }}>[1]. Năm 2008: đề tài cơ sở “Xây dựng WEBSITE trường đại học Hồng Đức”, chủ nhiệm đề tài TS. Đỗ Văn Toàn.</Text>
                                        <Text style={{ fontSize: 11, left: 5 }}>[2]. Năm 2009-2010: đề tài cơ sở “Xây dựng phần mềm thi trắc nghiệm online và ứng dụng tại truờng ĐHHĐ”, chủ nhiệm đề tài TS. Đỗ Văn Toàn.</Text>
                                        <Text style={{ fontSize: 11, left: 5 }}>[3]. Năm 2010: đề tài cơ sở "Xây dựng phần mềm quản lý phòng thực hành Tin học sử dụng Camera", chủ nhiệm đề tài ThS. Phạm Thế Anh.</Text>
                                        <Text style={{ fontSize: 11, left: 5 }}>[4]. Năm 2012:dự án “Triển khai nghiên cứu ứng dụng phần mềm nguồn mở tại ĐHHĐ”, chủ nhiệm dự án TS. Đỗ Văn Toàn.</Text>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <Text style={{ fontSize: 15, color: 'blue' }}>III.  Bộ môn Khoa học máy tính</Text>
                                <View>
                                    <Text style={{ color: 'midnightblue' }}>1. Giới thiệu chung</Text>
                                    <View>
                                        <Text style={{ fontSize: 11 }}>   Bộ môn Khoa học máy tính đảm nhiệm chức năng giảng dạy các môn học chuyên ngành thuộc lĩnh vực Khoa học máy tính bậc đại học, trên đại học (các hệ chính qui, không chính qui), cao đẳng thuộc khoa CNTT-TT. Ngoài ra bộ môn cũng dành sự quan tâm đặc biệt cho các hoạt động nghiên cứu khoa học thuộc các lĩnh vực Khoa học máy tính.</Text>
                                    </View>
                                    <Text style={{ color: 'midnightblue' }}>2. Nhân sự</Text>
                                    <View>
                                        <Image style={{ height: 200 }} source={{ uri: 'http://hdu.edu.vn/SlideShow/2017428231746KHMT.jpg' }} />
                                        <Text style={{ fontSize: 11 }}>   Đội ngũ cán bộ của bộ môn đều có trình độ đại học trở lên bao gồm: 01 Tiến sỹ, 03 Thạc sỹ.</Text>
                                    </View>
                                    <Text style={{ color: 'midnightblue' }}>3. Các hướng nghiên cứu chính mà bộ môn đang nghiên cứu gồm:</Text>
                                    <View>
                                        <Text style={{ fontSize: 11 }}>+ Broadcast Encryption, Tracing Traitors, Public key Infrashtructure (Identity-based Cryptography, Implicit Certificate, ....)... </Text>
                                    </View>
                                    <Text style={{ color: 'midnightblue' }}>4. Các dự án quan trọng mà bộ môn hợp tác tham gia:</Text>
                                    <View>
                                        <Text style={{ fontSize: 11, left: 5 }}>+ Broadcast Encryption for Secure Telecommunications, dự án cấp nhà nước Pháp giai đoạn 2010 – 2013. Dự án xuất sắc nhất của Pháp trong giai đoạn 2010 – 2013.</Text>
                                        <Text style={{ fontSize: 11, left: 5 }}>+ Pervasive and Secure Information Service Infrastructure for Internet of Things based on Cloud Computing: Dự án trọng điểm quốc gia hợp tác với Đại học Bách khoa Hà Nội và Đại học NCTU Đài Loan.</Text>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <Text style={{ fontSize: 15, color: 'blue' }}>IV. BỘ MÔN KỸ THUẬT MÁY TÍNH VÀ TRUYỀN THÔNG </Text>
                                <View>
                                    <Text style={{ color: 'midnightblue' }}>1. Giới thiệu về bộ môn</Text>
                                    <View>
                                        <Text style={{ fontSize: 11 }}>   Giảng dạy và quản lý các học phần Kiến trúc máy tính; Hệ điều hành; Mạng máy tính; Vi xử lý và Lập trình hợp ngữ; Bảo trì hệ thống; Lập trình Java; Hệ điều hành Unix/Linux; Phần mềm nguồn mở; Các vi xử lý hiện đại; Lập trình mạng trên Java; Quản trị hệ thống máy tính; Mạng máy tính; Quản trị mạng. Các học phần giảng dạy cho chuyên ngành đào tạo cử nhân và cao đẳng Công nghệ thông tin.</Text>
                                        <Text style={{ fontSize: 11 }}>    Nghiên cứu khoa học: Tổ chức và quản lý các hoạt động nghiên cứu khoa học công nghệ với mục tiêu nghiên cứu để nâng cao chất lượng giảng dạy, triển khai ứng dụng khoa học công nghệ về kỹ thuật máy tính và khoa học công nghệ mạng máy tính và truyền thông vào thực tế phục vụ các nhiệm vụ kinh tế - xã hội.</Text>
                                        <Image style={{ height: 200 }} source={{ uri: 'http://hdu.edu.vn/NewsImages/20145168231b.png' }} />
                                    </View>
                                    <Text style={{ color: 'midnightblue' }}>2. Chiến lược phát triển của bộ môn </Text>
                                    <View>
                                        <Text style={{ fontSize: 11 }}>+ Tiếp tục đào tạo và bồi dưỡng đội ngũ giảng viên của bộ môn có trình độ chuyên môn cao để giảng dạy các học phần do bộ môn quản lý có chất lượng cao.</Text>
                                        <Text style={{ fontSize: 11 }}>+ Xây dựng đội ngũ giảng viên, đủ chuẩn để đào tạo cao học chuyên ngành Mạng máy tính. </Text>
                                        <Text style={{ fontSize: 11 }}>+ Triển khai ứng dụng khoa học kỹ thuật máy tính và khoa học công nghệ mạng máy tính và truyền thông vào thực tế.</Text>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <Text style={{ fontSize: 15, color: 'blue' }}>V. BỘ MÔN CÁC HỆ THỐNG THÔNG TIN </Text>
                                <View>
                                    <Text style={{ color: 'midnightblue' }}>1. Giới thiệu về bộ môn</Text>
                                    <View>
                                        <Text style={{ fontSize: 11 }}>    Bộ môn Các hệ thống thông tin đảm nhiệm chức năng giảng dạy các học phần thuộc hai chuyên ngành hệ thống thông tin và công nghệ phần mềm của Khoa CNTT-TT, và học phần Hệ thống thông tin quản lý của chuyên ngành Quản trị kinh doanh, Tài chính ngân hàng. Bên cạnh nhiệm vụ giảng dạy, nhiệm vụ nghiên cứu khoa học và phát triển các ứng dụng về hệ thống thông tin cũng luôn được bộ môn chú trọng.</Text>
                                        <Image style={{ height: 200 }} source={{ uri: 'http://hdu.edu.vn/SlideShow/2017428231711httt.jpg' }} />
                                    </View>
                                    <Text style={{ color: 'midnightblue' }}>2. Các hướng nghiên cứu bộ môn đã và sẽ triển khai </Text>
                                    <View>
                                        <Text style={{ fontSize: 11 }}>+ Phát triển các ứng dụng trên thiết bị di động</Text>
                                        <Text style={{ fontSize: 11 }}>+ Các công nghệ để thiết kế và xây dựng Website</Text>
                                        <Text style={{ fontSize: 11 }}>+ Phát triển các hệ thống thông tin phục vụ công cuộc tin học hoá</Text>
                                    </View>
                                    <View style={{ height: 200 }}>

                                    </View>
                                </View>
                            </View>

                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerText: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        fontWeight: 'bold'
    },
});