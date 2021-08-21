**<center>NGUỒN: VOI 2018 - 2019</center>**
**<center>Test không chính thức (thầy Hồ Đắc Phương)</center>**

Trong quá trình luyện tập cho cuộc thi học sinh giỏi sắp tới, Hùng được thầy giáo giao cho thử sức giải bài toán nén xâu kí tự (chỉ gôm các kí tự latin in hoa) sau đây:

Phép cộng trên hai xâu ~x~ và ~y~, kí hiệu là ~x + y~, được hiểu là ghép xâu ~y~ liền sau xâu ~x~. Xuất phát từ hai xâu ~u~, ~v~ và số nguyên ~k~, xâu ~F_k~ được tạo theo luật sau (còn được gọi là luật tựa Fibonacci): ~F_1=u; F_2=v; F_3=F_2+F_1;\dots, F_k=F_{k-1}+F_{k-2}~.

**Ví dụ:** với hai xâu ~u =~ `AB`, ~v =~ `C` và ~k= 5~ ta có:
~F_1=~ `AB`, ~F_2=~ `C`, ~F_3=~ `CAB`, ~F_4=~ `CABC`, ~F_5=~ `CABCCAB`.

Giả sử xâu ~T~ độ dài ~n~ là xâu được tạo theo luật trên từ hai xâu xuất phát ~u_T, v_T~ có độ dài tương ứng là ~n_1, n_2~. Như vậy, ~v_T~ là xâu gồm ~n_2~ kí tự đầu tiên của xâu ~T~ và ~u_T~ là xâu gồm ~n_1~ kí tự tiếp theo của xâu ~T~. Xâu ~T~ có thể được nén thành bộ ~(u_T, v_T, n)~ vì từ ~3~ thông tin ~u_T, v_T~ và ~n~ ta có thể khôi phục được xâu ~T~ theo luật trên. Ví dụ, xâu ~T=~ `CABCCAB` có thê được nén thành bộ ~(AB,C,7)~.

Một xâu ~S~ bất kì có độ dài ~m~ cũng có thể được nén theo cách như trên. Với hai số nguyên dương ~m_1, m_2\ (m_1 + m_2 \le  m)~, gọi ~v_s~ là xâu gồm ~m_2~; kí tự đầu tiên của xâu ~S~ và ~u_s~ là xâu gồm ~m_1~ kí tự tiếp theo trên xâu ~S~. Khi đó, xâu ~S~ có thể được nén thành bộ ~(u_s, v_s, m)~. Tuy nhiên, từ ~3~ thông tin ~u_s, v_s~ và ~m~ ta có thể không khôi phục được chính xác xâu ~S~. Do đó, người ta đánh giá độ lỗi của phương pháp nén xâu này như sau. Với bộ ~(u_s, v_s, m)~, tạo xâu ~F_k~ với ~k~ nhỏ nhất mà độ dài ~F_k~ lớn hơn hoặc bằng ~m~ theo luật tựa Fibonnaci từ hai xâu xuất phát ~F_1 = u_s, F-2=v_s~. Độ lỗi của việc nén xâu ~S~ được tính bằng số lượng vị trí ~i~ mà ~S[i]~ khác với ~F_k[i]~, trong đó ~S[i]~ và ~F_k[i]~ tương ứng là kí tự thứ ~i~ của xâu ~S~ và xâu ~F_k~ với ~i\le m~.
Ví dụ, với ~m_1 = 2~ và ~m_2 = 1~, xâu ~S =~ `CABACC` có độ dài ~m = 6~ được nén thành bộ ~(AB, C, 6)~, sau đó tạo ra xâu ~F_5 =~ `CABCCAB`. Khi đó, độ lỗi của việc nén xâu ~S~ là ~2~ đo có hai kí tự ở các vị trí thứ ~4~ và thứ ~6~ của ~S~ và ~F_5~ là khác nhau.

Nhận thấy rằng, ~m_1+m_2~ kí tự đầu tiên của xâu ~S~ ảnh hưởng rất lớn đến độ lỗi của việc nén xâu. Vì vậy, người ta tiến hành thay đổi không quá ~r~r kí tự trong ~m_1+m_2~ kí tự đầu tiên của xâu ~S~ để biến xâu ~S~ thành xâu ~S'~ sao cho độ lỗi của việc nén xâu ~S'~ là nhỏ nhất. Việc thay đổi một kí tự là thay kí tự đó bởi một kí tự khác.

**Yêu cầu:** Cho các số nguyên ~m, m_1, m_2,, r~ và xâu ~S~, hãy tìm cách thay đổi không quá ~r~ kí tự trong ~m_1 + m_2~ kí tự đầu tiên của xâu ~S~ để biến xâu ~S~ thành xâu ~S^*~ sao cho độ lỗi của việc nén xâu ~S^*~ là nhỏ nhất.

## Dữ liệu vào:
- Dòng thứ nhất chứa bốn số nguyên cách nhau bởi dấu cách ~m, m_1, m_2, r\ (0\le r\le m_1+m_2 \le m~;
- Dòng thứ hai chứa xâu ~S~ độ dài ~m~, xâu chỉ gồm các kí tự thuộc tập kí tự chữ cái latin in hoa (từ `A` đến `Z`).

## Dữ liệu ra:
- Ghi ra một số nguyên là độ lỗi nhỏ nhất tìm được.

## Ví dụ:
#### Dữ liệu vào:
```
6 2 1 1
CABAAC
```

#### Dữ liệu ra:
```
1
```

#### Giái thích:
- Trong ví dụ trên, cách thay tối ưu nhất là thay kí tự đầu tiên của xâu ~S~ thành `A` để nhận được xâu ~S^*=~ `AABAAC`. Với ~m_1 = 2~ và ~m_2 = 1~, xâu ~S^*~ được nén thành bộ ~(AB, A, 6)~, ta tạo ra xâu ~F_5 =~ `AABAAAB`. Khi đó, độ lỗi của việc nén xâu ~S~ bằng ~1~ do kí tự ở vị trí thứ ~6~ của ~S^*~ và ~F_5~ là khác nhau.

## Giới hạn:
- Có ~30\%~ số test ứng với ~30\%~ số điểm của bài thỏa mãn điều kiện: ~r = 0; m \le 10^3~;
- ~40\%~ số test khác ứng với ~40\%~ số điểm của bài thỏa mãn điều kiện: ~r = m_1+m_2 \le 10; m \le 10^3~ và xâu ~S~ chỉ gồm hai kí tự `A` và `B`;
- ~30\%~ số test còn lại ứng với ~30\%~ số điểm của bài thỏa mãn điều kiện: ~m \le10^5~.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)