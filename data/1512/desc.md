**<center>NGUỒN: VOI 2018 - 2019</center>**
**<center>Test không chính thức (thầy Hồ Đắc Phương)</center>**

Spir là robot tự hành được trung tâm vũ trụ NAS phóng lên để thám hiểm bề mặt sao Hỏa. Spir được trang bị một tấm pin năng lượng mặt trời dưới dạng một bảng gồm ~m~ hàng và ~n~ cột, mỗi ô là một miếng pin hình vuông. Các hàng được đánh số từ trên xuống dưới lần lượt là ~1, 2,…, m~. Các cột được đánh số từ trái sang phải lần lượt là ~1, 2,…, n~. Tại thời điểm ban đầu lúc phóng lên, miếng pin tọa độ ~(i, j)~ ở hàng ~i~ cột ~j~ được thiết lập mức hấp thụ là ~a_{ij}~. Mức hấp thụ của mảng pin hình chữ nhật bất kì nằm trong tấm pin bằng tổng mức hấp thụ của các miếng pin trong mảng đó. Các miếng pin có thể điều khiển để thay đổi mức hấp thụ, do đó mức hấp thụ của cùng một mảng pin hình chữ nhật có thể thay đổi theo các thời điểm khác nhau.

NAS thiết kế ~2~ lệnh điều khiển `R` và `D` để điều chỉnh mức hấp thụ của các miếng pin. Khi nhận một lệnh `R`, đồng loạt mỗi miếng pin sẽ được thiết lập sang mức hấp thụ ngay trước khi nhận lệnh này của miếng pin liền kề bên phải cùng hàng. Mỗi miếng pin cuối hàng được thiết lập sang mức hấp thụ của miếng pin đầu hàng đó. Khi nhận một lệnh `D`, đồng loạt mỗi miếng pin sẽ được thiết lập sang mức hấp thụ ngay trước khi nhận lệnh này của miếng pin liền kề bên dưới cùng cột. Mỗi miếng pin ở cuối cột được thiết lập sang mức hấp thụ của miếng pin đầu cột đó.

Để điều khiển tấm pin của Spir, các kỹ sư NAS sử dụng các tín hiệu điều khiển chứa ~2~ số nguyên ~x, y~ tương ứng với số lượng lệnh `R` và lệnh `D` cần áp dụng. Khi nhận được tín hiệu điều khiển, từng lệnh trong ~x~ lệnh `R` và sau đó từng lệnh trong ~y~ lệnh `D` sẽ tuần tự được thực hiện. Chú ý
rằng trạng thái của tấm pin thu được sau tác động của mỗi lệnh là trạng thái tác động của lệnh kế tiếp. Trạng thái của tấm pin thu được sau mỗi tín hiệu điều khiển là trạng thái tác động của lệnh đầu tiên trong tín hiệu điều khiển tiếp theo.

**Yêu cầu:** Hãy giúp các kỹ sư NAS tính toán mức hấp thụ của mảng pin hình chữ nhật mà họ quan tâm tại một số thời điểm.

## Dữ liệu vào:
- Dòng thứ nhất chứa hai số nguyên dương ~m~ và ~n~ lần lượt là số hàng và số cột của tấm pin;
- Dòng thứ ~i~ trong số ~m~ dòng tiếp theo chứa ~n~ số nguyên dương ~a_{ij}\ (a_{ij} ≤ 1000, j = 1, 2,..., n)~ là mức hấp thụ được thiết lập lúc ban đầu của các miếng pin trên hàng thứ ~i~;
- Dòng tiếp theo chứa một số nguyên dương ~q~ là số lần gửi tín hiệu điều khiển hoặc yêu cầu tính toán của NAS;
- Mỗi dòng trong ~q~ dòng tiếp theo có cấu trúc như sau:
    - Đầu tiên là một số nguyên ~p\ (0 ≤p≤ 1)~;
    - Nếu ~p=0~, tiếp theo là hai số nguyên ~x, y\ (0 ≤ x, y ≤ 1000)~ mô tả một tín hiệu điều khiển;
    - Nếu ~p= 1~, tiếp theo là bốn số nguyên ~u, v, s, t\ (1 ≤u≤s ≤m, 1 ≤v ≤t≤n)~ mô tả tọa độ mảng pin hình chữ nhật được yêu cầu tính toán, trong đó ~(u, v)~ là tọa độ ô góc trên bên trái và ~(s, t)~ là tọa độ ô góc dưới bên phải.

Các số trên cùng một dòng cách nhau bởi dấu cách.

## Dữ liệu ra:
- Ghi ra mức hấp thụ của các mảng pin hình chữ nhật tại từng thời điểm được yêu cầu tính toán tương ứng trong dữ liệu vào, mỗi số trên một dòng.

## Ví dụ:
#### Dữ liệu vào:
```
4 5
1 2 5 2 1
4 3 1 2 3
2 3 5 3 1
3 2 1 1 5
5
0 2 1
1 2 2 3 4
0 2 4
1 1 1 1 1
1 3 2 4 5
```

#### Dữ liệu ra:
```
15
3
17
```

#### Giái thích:
- Trạng thái tấm pin sau mỗi tín hiệu điểu khiển được thể hiện trên hình vẽ dưới đây. Các mảng pin hình chữ nhật cần tính toán được tô màu xám.
<center><img src="/images/problems/1512/solpin.png" width=500px></center>

## Giới hạn:
- Có ~40\%~ số test ứng với ~40\%~ số điểm của bài thỏa mãn điều kiện: ~m, n ≤ 100; q ≤ 1000~ và ~p~ luôn bằng ~1~;
- ~30\%~ số test khác ứng với ~30\%~ số điểm của bài thỏa mãn điều kiện: ~m, n ≤ 100, q ≤ 1000~;
- ~30\%~ số test còn lại ứng với ~30\%~ số điểm của bài thỏa mãn điều kiện: ~m, n ≤ 500, q ≤ 5×10^4~.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)