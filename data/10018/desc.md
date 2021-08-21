Spider-Man là một chàng trai có siêu sức mạnh với khả năng bắn tơ, bám tường, siêu khoẻ,… Anh tham gia vào nhóm các siêu anh hùng cũng có siêu sức mạnh giống mình có tên Avengers để cùng nhau đảm bảo sự bình yên của thành phố.

Mỗi năm, tại thành phố này luôn tổ chức kì thi Olympic 30/4 cho các học sinh ở các khu vực lân cận đến tham gia tranh tài. Với số lượng lớn học sinh đến thành phố để dự thi, Avengers cử ra một số anh hùng ra để giữ gìn trật tự thành phố và bảo vệ các học sinh, trong đó Spider-Man được cử đến phố đi bộ Nguyễn Huệ. Tuy làm siêu anh hùng, nhưng nhà anh rất nghèo phải đi bươn chải khắp mọi nơi. Nhân cơ hội này, anh đã mua số lượng lớn kẹo mút với giá mỗi cây 1000đ để bán cho những học sinh đi dạo trên phố đi bộ với giá gấp 20 lần!

Tuy nhiên có 2 vấn đề: 
1.	Spider-Man phải để túi kẹo của anh tại một chỗ nhất định, do bộ đồ siêu anh hùng không có túi nên sau khi bán kẹo xong phải quay lại vị trí túi kẹo để lấy kẹo thêm;
2.	Spider-Man phải tìm tổng độ dài đường đi mà anh phải đi nhỏ nhất để tốn ít thời gian nhất vì anh còn phải tập trung làm nhiệm vụ của Avengers.

Để rút ngắn thời gian bán kẹo hơn, Spider-Man đã nhờ đến người bạn có mật danh “LV” bán tiếp. Cả hai chỉ có thể mang đi số lượng kẹo đủ cho một nhóm học sinh (Spider-Man không có túi và LV ốm yếu không thể mang lượng kẹo nhiều hơn), sau khi bán số kẹo trong người cho một nhóm học sinh xong phải quay lại vị trí túi kẹo để lấy thêm. Đương nhiên cả hai phải bán kẹo cho hai nhóm học sinh khác nhau và không bán được cho nhóm học sinh đã bán rồi. 

Bạn hãy giúp Spider-Man và LV tính toán tổng độ dài đường đi nhỏ nhất có thể mà cả hai cần phải đi để bán kẹo cho tất cả nhóm học sinh trên phố đi bộ.

**Lưu ý:** đường đi của Spider-Man và LV được cho phép giao nhau và chồng lên nhau. Khi ở vị trí bắt đầu thì trên người Spider-Man và LV đã có sẵn số lượng kẹo để bán cho một nhóm học sinh.

<br>

**DỮ LIỆU VÀO:**
+ Dòng đầu tiên chứa số nguyên ~x_a, y_a, x_b, y_b, x_c, y_c~ lần lượt là vị trí của Spider-Man, LV và vị trí túi kẹo trên hệ tọa độ Đề-Các (Oxy);
+ Dòng thứ hai chứa số nguyên ~n~ là số lượng nhóm học sinh;
+ ~n~ dòng tiếp theo chứa ~n~ cặp số ~x_i, y_i~ khác nhau là vị trí của nhóm học sinh.

Hai số liên tiếp trên một dòng được ghi cách nhau một dấu cách.

<br>

**DỮ LIỆU RA:**
+ Ghi trên một dòng số thực (chính xác đến hàng phần trăm nghìn) là kết quả bài toán.

**VÍ DỤ:**

**Dữ liệu vào:**
```
1 1 2 2 0 0
2
1 2
2 1
```
**Dữ liệu ra:**
```
6.47214
```
<br>

**Dữ liệu vào:**
```
4 0 2 4 1 1
5
5 2
3 0
1 5
3 5
3 3
```
**Dữ liệu ra:**
```
30.37451
```
<br>

**Dữ liệu vào:**
```
3 1 1 2 0 0
3
1 1
2 1
2 3
```
**Dữ liệu ra:**
```
11.08426
```
**Giải thích:**

+ Spider-Man từ (3,1) đến (2,1) đến (0,0) đến (1,1) đến (0,0);
+ LV từ (1,2) đến (2,3) đến (0,0).

<br>

**GIỚI HẠN:**

Toàn bộ test thoả mãn điều kiện: ~n ≤ 10^5, 0 ≤ x_a, y_a, x_b, y_b, x_c, y_c ≤ 10^6~;
+ Có 25% số test thoả mãn điều kiện: ~x_a = y_a = x_b = y_b = x_c = y_c~;
+ Có 50% số test thoả mãn điều kiện: ~n ≤ 10^3~;
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)