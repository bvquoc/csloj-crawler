<!--**<center>NGUỒN: Free Contest FYT Code Cup Day 2</center>**-->

Câu lạc bộ bóng đá là câu lạc bộ sôi nổi nhất của FYT. Hàng tuần, rất đông thành viên tham gia câu lạc bộ tụ họp và giao lưu bóng đá với nhau. Vì hoạt động rất sôi nôi nên lớp trưởng của FYT đã quyết định đầu tư kinh phí để tổ chức một giải đấu bóng đá lớn trong câu lạc bộ.

Để chuẩn bị cho giải đấu, các thành viên được chia thành ~N~ đội có thực lực ngang nhau. ~N~ đội này sẽ đá vòng tròn, mỗi đội sẽ đá ~N − 1~ trận với ~N − 1~ đội còn lại. Vì vậy, có tổng cộng ~\frac{N × (N − 1)}{2}~ trận đấu được diễn ra.

Giải đấu đã diễn ra thành công tốt đẹp, chức vô địch cũng đã được xác định. Một thành viên giấu tên trong FYT chịu trách nhiệm thống kê lại kết quả của từng trận đấu. Tuy nhiên, vì quá mải mê xem các trận đấu mà thành viên này đã quên mất nhiệm vụ thống kê kết quả.

May mắn thay, cậu vẫn nhớ được số điểm cuối cùng của các đội. Gọi điểm số của ~N~ đội lần lượt là ~P_1, P_2,…, P_N~. Để không bị lớp trưởng FYT trách mắng, cậu ấy cần phải tính toán xem có bao nhiêu khả năng để tạo ra được điểm số cuối cùng như trên.

**Yêu cầu:** Đếm số lượng kết quả khác nhau có thể xảy ra của giải đấu để điểm của từng đội lần lượt là ~P_1, P_2,…, P_N~. Lưu ý, hai kết quả được gọi là khác nhau nếu như tồn tại một cặp đấu có kết quả khác nhau (chỉ quan tâm đến kết quả cuối cùng, bỏ qua tỉ số chi tiết trận đấu).

**Lưu ý:** Điểm số của từng trận đấu sẽ được tính như sau:
- Với trận đấu có tỉ số chênh lệch, đội thắng sẽ nhận được ~3~ điểm, đội thua sẽ không nhận được điểm nào;
- Với trận đấu có tỉ số hòa nhau, mỗi đội sẽ nhận được ~1~ điểm.

## Dữ liệu vào:
- Dữ liệu đầu vào bao gồm nhiều bộ test, với mỗi bộ test:
    - Dòng đầu tiên chứa số nguyên dương ~N~;
    - Dòng thứ hai chứa ~N~ số nguyên không âm ~P_1, P_2,…, P_N~.
- Dữ liệu đầu vào sẽ kết thúc khi nhập vào ~N = 0~.

## Dữ liệu ra:
- Với mỗi bộ test, kết quả sẽ được in ra trên từng dòng. Với bộ test thứ ~i~, kết quả in ra sẽ có định dạng ~Case \#i: X~, trong đó ~X~ là số cách thỏa mãn yêu cầu đề bài.

## Ví dụ:
#### Dữ liệu vào:
```
3
6 1 1
4
6 6 6 0
2
2 1
0
```

#### Dữ liệu ra:
```
Case #1: 1
Case #2: 2
Case #3: 0
```

#### Giải thích:
- Trong ví dụ thứ nhất, cách duy nhất thỏa mãn yêu cầu đề bài là: đội ~1~ thắng cả hai trận với đội ~2~ và đội ~3~, đội ~2~ và ~3~ hòa nhau;
- Trong ví dụ thứ hai, ~2~ cách thỏa mãn yêu cầu đề bài là:
    - Đội ~1~ thắng đội ~2~ và ~4~, đội ~2~ thắng đội ~3~ và ~4~, đội ~3~ thắng đội ~1~ và ~4~;
    - Đội ~1~ thắng đội ~3~ và ~4~, đội ~2~ thắng đội ~1~ và ~4~, đội ~3~ thắng đội ~2~ và ~4~.
- Trong ví dụ thứ ba, không có cách nào thỏa mãn yêu cầu đề bài.

## Giới hạn:
- Số lượng bộ test trong dữ liệu đầu vào không vượt quá ~40~;
- ~2 ≤ N ≤ 8, 0 ≤ P_i ≤ 3 × (N − 1)~.