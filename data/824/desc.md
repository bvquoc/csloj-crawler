**<center>Trại hè tin học Thái Nguyên 2020 - Khối lớp 11</center>**

Trại hè Tin học Thái Nguyên diễn ra vào tháng ~7~ năm nay là một sự kiện lớn trong giới Tin học các trường THPT chuyên trên toàn miền Bắc. Tại đây không chỉ có những hoạt động trang bị kiến thức lý thú như đố vui hay uống trà sữa, mà còn là cơ hội để cho một số nhân vật đặc biệt có cơ hội được thả thính.

Dù đã sắp vào Đại học và đã quá tuổi tham gia trại hè cũng như chẳng có việc gì ở đây, thành viên đội tuyển Tin học Châu Á Hà Quang Ming dấu tên vẫn quyết định mò đến Thái Nguyên bằng mọi giá. Ming lấy lý do chính khi đến đây là vì không thể rời xa em gái nuôi, nhưng thực ra anh cũng rất tận dụng cơ hội để khoe nhãn mác APIO-er của mình và "giao lưu kết hợp" nhằm tuyển thêm hậu cung.

Năm nay, các học sinh trong trại hè được phân vào ~𝑛~ lớp. Sau một ngày dạo quanh phố phường dạo qua thị trường, Ming đã chọn ra được ~𝑛~ em gái xinh tươi nhất đến từ ~𝑛~ lớp khác nhau. Ming sẽ thả thính từng em một, và với em gái thứ ~𝑖~ Ming sẽ thả túi thính có độ thơm là ~𝑎_𝑖~. Tất nhiên, Ming thường rất nhạt và thiếu muối, nên độ thơm của các túi thính có thể âm.

Kế hoạch thả thính của Ming làm cô em gái nuôi NTNA vô cùng tức giận và đòi anh trai nuôi phải ngưng lại ngay lập tức. Dù rất yêu em gái nuôi, Ming không thể từ bỏ ham muốn thả thính và chỉ chấp nhận thay đổi độ thơm của tối đa ~𝑘~ túi thính. Sau sự ra đi của Liinhh, NTNA giờ đã trở thành cô gái quyền lực nhất đội tuyển. Thế nên cô ta đưa ra yêu sách mới: để không cho Ming thả thính quá thơm, độ chênh lệch lớn nhất giữa hai túi thính liền nhau, tức ~max(|𝑎_1 − 𝑎_2|, |𝑎_2 − 𝑎_3|, … , |𝑎_{𝑛−1} − 𝑎_𝑛|)~ phải nhỏ nhất có thể.

Hãy giúp Ming thay đổi không quá ~𝑘~ túi thính để có thể giữ lại em gái nuôi.

## Dữ liệu vào:
- Dòng đầu tiên chứa hai số nguyên ~𝑛~ và ~𝑘\ (1 ≤ 𝑘 ≤ 𝑛 ≤ 2000)~ – số em gái Ming muốn thả thính và số túi thính tối đa Ming muốn thay đổi;
- Dòng thứ hai chứa ~𝑛~ số nguyên ~𝑎_1, 𝑎_2, … , 𝑎_𝑛\ (−10^9 ≤ 𝑎_𝑖 ≤ 10^9)~ – độ thơm của các túi thính theo dự định của Ming.

## Dữ liệu ra:
- Một số nguyên duy nhất là giá trị nhỏ nhất của ~max(|𝑎_1 − 𝑎_2|, |𝑎_2 − 𝑎_3|, … , |𝑎_{𝑛−1} − 𝑎_𝑛|)~.

## Giới hạn:
- Subtask ~\#1: 𝑛 ≤ 30~ và ~0 ≤ 𝑎_𝑖 ≤ 120~
- Subtask ~\#2: 𝑛 ≤ 100~ và ~0 ≤ 𝑎_𝑖 ≤ 300~
- Subtask ~\#3:~ Không có ràng buộc gì thêm

## Ví dụ
#### Dữ liệu vào:
```
5 2
4 7 4 7 4
```

#### Dữ liệu ra:
```
0
```

#### Dữ liệu vào:
```
6 2
1 2 3 7 8 9
```

#### Dữ liệu ra:
```
2
```

#### Giải thích:
- Trong ví dụ thứ nhất, một phương án tối ưu là thay đổi độ hấp dẫn của các túi thính thứ ~2~ và ~4~ thành ~4~. Khi đó độ hấp dẫn của các túi thính là ~\{4,4,4,4,4\}~. Chênh lệch giữa hai túi thính cạnh nhau là ~0~.
- Trong ví dụ thứ hai, một phương án tối ưu là thay đổi độ hấp dẫn của các túi thính thứ ~3~ và ~4~ thành ~4~ và ~6~. Độ hấp dẫn của các túi thính trở thành ~\{1,2,4,6,8,9\}~. Chênh lệch giữa hai túi thính cạnh nhau lớn nhất là ~2~.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)