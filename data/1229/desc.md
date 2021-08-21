**<center>Nguồn: Ôn HN tháng 11/2016, Thầy Lê Minh Hoàng, Ngày 1</center>**

Giáo sư X chế tạo một Robot tham gia cuộc thi của câu lạc bộ CSP Robotics. Bài thi diễn ra trên sơ đồ giao thông gồm ~𝑛~ địa điểm và ~𝑚~ con đường một chiều nối các địa điểm đó. Các địa điểm được đánh số từ ~1~ tới ~𝑛~ và các con đường đánh số từ ~1~ tới ~𝑚~. Con đường thứ ~𝑖~ cho phép robot đi từ địa điểm ~𝑢_𝑖~ tới địa điểm ~𝑣_𝑖~ và theo đặc thù thiết kế, robot của giáo sư X có thể đi qua con đường này trong thời gian là ~𝑤_𝑖~.

Trong bài thi, robot cần được đặt ở một địa điểm tùy chọn làm nơi xuất phát, sau đó phải thực hiện phép di chuyển qua đúng ~𝑘~ con đường, mỗi con đường có thể đi qua nhiều lần, để quay về nơi xuất phát. Hãy giúp giáo sư X tìm ra hành trình tiết kiệm thời gian nhất cho con robot của mình.

## Dữ liệu vào:
- Dòng đầu chứa ba số nguyên dương ~𝑛, 𝑚, 𝑘\ (𝑛 ≤ 100; 𝑚 ≤ 10^4; 𝑘 ≤ 10^9)~;
- ~𝑚~ dòng tiếp theo, dòng thứ ~𝑖~ chứa ba số nguyên dương ~𝑢_𝑖, 𝑣_𝑖, 𝑤_𝑖\ (∀𝑖: 𝑤_𝑖 ≤ 10^9)~.

Các số trên một dòng được ghi cách nhau bởi dấu cách.

## Dữ liệu ra:
- Ghi ra một số nguyên duy nhất là thời gian ít nhất để thực hiện hành trình theo phương án tìm được. Nếu không tồn tại hành trình đáp ứng yêu cầu, ghi ra ~-1~.

## Ví dụ:
<center><img src="/images/problems/1229/CROBOT.svg" width="400px" /></center>

#### Dữ liệu vào:
```
6 8 11
1 2 1
2 3 1
3 4 2
4 5 10
4 6 1
5 5 8
5 2 10
6 3 1
```

#### Dữ liệu ra:
```
39
```

#### Dữ liệu vào:
```
2 2 3
1 2 1
2 1 1
```

#### Dữ liệu ra:
```
-1
```

#### Giải thích:
**Ví dụ 1:** Một trong những hành trình tối ưu là:
~~2\overset{1}{\rightarrow}3\overset{2}{\rightarrow}4\overset{1}{\rightarrow}6\overset{1}{\rightarrow}3\overset{2}{\rightarrow}4\overset{1}{\rightarrow}6\overset{1}{\rightarrow}3\overset{2}{\rightarrow}4\overset{10}{\rightarrow}5\overset{8}{\rightarrow}5\overset{10}{\rightarrow}2~~