<!--**<center>NGUỒN: Free Contest FYT Code Cup Day 2</center>**-->

An là một thành viên tích cực của FYT. Nhờ tinh thần trách nhiệm và hoàn thành tốt công việc chuyên môn, An được các bạn nữ xinh đẹp trong FYT yêu quý. Trong đợt tuyển sinh của FYT lần này, An là người phụ trách ra đề chuyên môn. An đã nghĩ ra một bài toán như sau: cho một số nguyên dương gồm các chữ số khác ~0~ có độ dài là ~N~, chữ số thứ ~i~ có giá trị ~d_i~, hãy kiểm tra xem có tồn tại cách xóa đi đúng ~2~ chữ số bất kỳ để số đó có chia hết cho ~3~ hay không? Cảm thấy bài toán quá dễ, An đã khoe với Tâm cách làm. Không ngờ rằng, Tâm lại hỏi ngược lại An: "Vậy em đố anh, bây giờ nếu không phải là chia hết cho ~3~ mà là chia hết cho ~11~ thì làm như thế nào?".

Không những thế, Tâm còn hỏi có bao nhiêu cách để tạo ra được số chia hết cho ~11~ bằng cách xóa đi đúng ~2~ chữ số bất kỳ. Đến đây thì An cảm thấy hơi choáng váng, nhưng vì không muốn mất mặt với Tâm, An nhất định phải làm được bài toán này. An đã bí mật nhờ các bạn trong cuộc thi FYT Code Cup 2020 giúp đỡ. Các bạn hãy giúp An nhé.

**Lưu ý:** Gọi ~(i, j)\ (i ≠ j)~ là cách tạo ra số mới khi xóa hai chữ số ~d_i~ và ~d_j~. Hai cách xóa ~(i_1, j_1)~ và ~(i_2, j_2)~ được gọi là khác nhau khi và chỉ khi ~i_1 ≠ i_2~ hoặc ~j_1 ≠ j_2~.

## Dữ liệu vào:
- Dòng đầu tiên chứa số nguyên dương ~N~;
- Dòng thứ hai chứa ~N~ chữ số liên tiếp nhau ~d_1, d_2,…, d_N~, các chữ số nằm trong đoạn ~[1;9]~.

## Dữ liệu ra:
- Một số nguyên không âm duy nhất tương ứng với số cách xóa đi hai chữ số để số mới tạo thành chia hết cho ~11~.

## Ví dụ:
#### Dữ liệu vào:
```
5
12121
```

#### Dữ liệu ra:
```
4
```

#### Dữ liệu vào:
```
4
1111
```

#### Dữ liệu ra:
```
6
```

#### Dữ liệu vào:
```
3
111
```

#### Dữ liệu ra:
```
0
```

#### Giải thích:
- Trong ví dụ thứ nhất, có ~4~ cách xóa thỏa mãn yêu cầu đề bài là ~(1, 2), (2, 3), (3, 4), (4, 5)~. Cả ~4~ cách sau khi xóa đều tạo thành số ~121~ chia hết cho ~11~.
- Trong ví dụ thứ hai, có ~6~ cách xóa thỏa mãn yêu cầu đề bài là ~(1, 2), (1, 3), (1, 4), (2, 3),(2, 4), (3, 4)~. Cả ~6~ cách sau khi xóa đều tạo thành số ~11~ chia hết cho ~11~.
- Trong ví dụ thứ ba, không tồn tại cách xóa thỏa mãn yêu cầu đề bài.

## Giới hạn:
- ~3 ≤ N ≤ 10^5, 1 ≤ d_i ≤ 9~.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)