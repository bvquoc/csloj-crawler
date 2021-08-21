<!--**<center>NGUỒN: Bài tập thầy Lê Minh Hoàng ôn Hải Phòng T10/2016</center>**-->

Giáo sư X cảm thấy mệt mỏi với công việc giảng dạy và nghiên cứu nên ông quyết định vác xe đi dạo quanh các con đường trong thành phố để thay đổi không khí. Có ~𝑛~ địa điểm đánh số từ ~1~ tới ~𝑛~ và ~𝑚~ con đường một chiều đánh số từ ~1~ tới ~𝑚~. Con đường thứ ~𝑖~ cho phép đi từ địa điểm ~𝑢_𝑖~ tới địa điểm ~𝑣_𝑖~ và có độ dài ~𝑤_𝑖~. Hệ thống đường cho phép đi lại giữa hai địa điểm bất kỳ.

Giáo sư X xuất phát từ trường nằm tại địa điểm ~1~. Ông muốn đi qua tất cả ~𝑚~ con đường rồi sau đó quay trở về trường. Ông có thể đi qua một con đường nhiều lần nhưng buộc phải đi theo chiều đã định của những con đường, bởi nếu đi ngược chiều thì ông sẽ được hưởng vài giờ nghỉ bất đắc dĩ tại trụ sở cảnh sát giao thông.

**Yêu cầu:** Tìm hành trình ngắn nhất cho giáo sư X thỏa mãn yêu cầu trên.

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên dương ~𝑛 ≤ 10^3; 𝑚 ≤ 10^4~;
- ~𝑚~ dòng tiếp theo, dòng thứ ~𝑖~ chứa ba số nguyên dương ~𝑢_𝑖, 𝑣_𝑖, 𝑤_𝑖\ (𝑤_𝑖 ≤ 10^6)~.

## Dữ liệu ra:
- Ghi ra một số nguyên duy nhất là độ dài hành trình tìm được.

## Ví dụ:
<center><img src="/images/problems/1426/DCPP.svg" width="480px" /></center>

#### Dữ liệu vào:
```
6 9
1 4 4
2 4 2
3 1 2
3 2 6
3 4 1
4 5 2
4 6 3
5 3 3
6 3 1
```

#### Dữ liệu ra:
```
28
```

#### Giải thích: 
- Hành trình cần tìm là: ~1→4→6→3→2→4→5→3→4→6→3→1~.