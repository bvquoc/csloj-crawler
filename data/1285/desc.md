**<center>Hải phòng - Ngày 06 tháng 11 năm 2020 (am)</center>**

Công nghiệp ô tô ở Berland hết sức phát triển. Thường xuyên xuất hiện nhiều kiểu loại xe mới và theo dòng thời gian, một số loại xe cũ sẽ bị ngừng sản xuất. Một trong những tham số qua trọng nhất của xe là giá bán.

Các cầu thủ của đội bóng “Hoa giấy kép” địa phương cũng rất thích ô tô. Hộ thấm nhuần tư tưởng chủ đạo: phải là đội bóng của thành phố, của cả người giầu và người nghèo. Vì vậy họ chỉ mua xe có giá đúng bằng giá trị trung bình các loại xe đang lưu hành trên thị trường. Điều này cũng lôi cuốn nhiều người hâm mộ mua các loại xe này. Dĩ nhiên điều này làm các nhà sản xuất ô tô quan tâm, muốn biết hiện nay trên thị trường có bao nhiêu loại xe được các cầu thủ tìm mua. Thông tin đưa vào cơ sở dữ liệu (CSDL) có một trong 3 dạng:
- $+\ k$: đưa ra thị trượng một loại xe mới với giá là $k\ (0 ≤ k ≤ 10^{13})$;
- $–$: loại bỏ kiểu xe cũ nhất đang lưu hành trên thị trường;
- $?$: số loại xe có giá đúng bằng trung bình cộng giá các loại xe đang lưu hành trên thị trường.

Với mỗi dòng thông tin dạng $?$ hãy đưa ra câu trả lời tương ứng.

## Dữ liệu vào:
- Dòng đầu tiên chứa số nguyên $n$ – số dòng thông tin đưa vào CSDL $(1 ≤ n ≤ 10^5)$;
- Mỗi dòng trong $n$ dòng sau chứa một dòng thông tin thuộc dạng đã nêu.

Dữ liệu đảm bảo không có trường hợp xóa thông tin trong CSDL rỗng.

## Dữ liệu ra:
- Các câu trả lời ứng với các dòng thông tin dạng $?$, mỗi câu trả lời đưa ra trên một dòng dưới dạng số nguyên.

## Ví dụ:
#### Dữ liệu vào:
```
10
+ 1
+ 4
+ 3
+ 4
?
-
-
?
-
?
```

#### Dữ liệu ra:
```
1
0
1
```