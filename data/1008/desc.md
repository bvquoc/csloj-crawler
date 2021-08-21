**<center>NGUỒN: CONTEST PRACTICE VNOI20  (WEEK 1 - T11/2019)</center>**
<br>

Phép toán thao tác `bit` `XOR` lấy hai dãy `bit` có cùng độ dài và thực hiện phép toán logic bao hàm `XOR` trên mỗi cặp `bit` tương ứng. Kết quả ở mỗi vị trí là ~1~ chỉ khi `bit` đầu tiên là ~1~ hoặc nếu chỉ khi `bit` thứ hai là ~1~, nhưng sẽ là ~0~ nếu cả hai là ~0~ hoặc cả hai là ~1~. Ở đây ta thực hiện phép so sánh hai `bit`, kết quả là ~1~ nếu hai `bit` khác nhau và là ~0~ nếu hai `bit` giống nhau.

**Ví dụ**:
~~\begin{matrix}{XOR} & \begin{matrix}{0101\text{ (số 5 ở hệ thập phân)}} \\0011\text{ (số 3 ở hệ thập phân)} \end{matrix} \\ & \overline{0110\text{ (số 6 ở hệ thập phân)}} \end{matrix}~~

Thành phố T mới được thành lập cách đây một năm. Hiện tại trong thành phố có ~N~ người dân đang sinh sống. Mỗi người dân sẽ có một con số yêu thích của riêng họ. Hện tại vị thị trưởng này có trong tay danh sách số yếu thích của từng người. Số yêu thích của người thứ ~i~ là ~X_i~. Nhân dịp kỉ niệm một năm thành lập thành phố, thị trưởng muốn chọn ra một con số để làm số đặc biệt của thành phố.Đối với ngài thì một số ~P~ không âm được gọi là xem xét là số đặc biệt nếu như ~(X_1 \text{ xor } P) + (X_2 \text{ xor } P) + ... (X_N \text{ xor } P) ≤ M~.

Ngày kỷ niệm đang cận kề, mà ngài thị trưởng thì lại đang quá bận rộn với sổ sách và giấy tờ. Bạn là một cư dân của thành số và là một cao thử lập trình. Bạn hãy giúp ngài thị trưởng tìm ra số ~P~ lớn nhất có thể nhé. 

## Dữ liệu vào: 
- Dòng đầu tiên gồm có số ~T~ là số lượng test.
- Tiếp đến là ~T~ nhóm dòng, mỗi nhóm gồm ~2~ dòng là thông tin về một test:
    - Dòng đầu tiên của mỗi nhóm gồm hai số ~N~ và ~M~
    - Dòng thứ hai của mỗi nhóm gồm ~N~ số nguyên không âm.

## Dữ liệu ra:
- Với mội test in ra trên một dòng số ~k~ lớn nhất thỏa điều kiện, nếu không tồn tại số ~P~ thỏa mãn thì in ra ~-1~.

## Ví dụ:
#### Dữ liệu vào:
```
2
5 30
1 2 3 4 5
4 10
1 2 3 4
```

#### Dữ liệu ra:
```
7
3
```

## Giới hạn:
- ~1 ≤ T ≤ 200, 1 ≤ N ≤ 1000~
- ~50\%~ số lượng test có ~0 ≤ M ≤ 100~ và ~0 ≤ X_i ≤ 100~
- ~50\%~ số lượng test còn lại có ~0 ≤ M ≤ 10^{15}~ và ~0 ≤ X_i ≤ 10^{15}~
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)