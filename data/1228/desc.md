**<center>Nguồn: Ôn HN tháng 11/2016, Thầy Lê Minh Hoàng, Ngày 1</center>**

Sau chuyến đi công du dài ngày, Giáo sư X lại càng thấy cần phải góp công sức để thay đổi chất lượng cuộc sống tại thị trấn nơi ông đang ở. Việc đầu tiên mà ông dự định làm là gửi bản kiến nghị về việc xây dựng mô hình giao thông mới dành cho các phương tiện giao thông công cộng nhằm tránh tắc đường, khói bụi và ô nhiễm: đó là hệ thống giao thông dưới lòng đất. Để thuyết phục được người nghe, ông xây dựng một mô hình. Trên mô hình này, ông đặt ~𝑛~ điểm dừng đỗ cho các phương tiện đi lại (được đánh số từ ~1~ đến ~𝑛~). Việc đi lại giữa các điểm này hoàn toàn bằng các tuyến đường hầm. Có ~𝑚~ con đường hai chiều nối giữa ~𝑛~ điểm đó, mỗi con đường gồm hai thông tin: độ dài tuyến đường và chiều cao tối đa của phương tiện có thể đi qua được. Một vài điểm dừng đỗ có thể không có đường nối trực tiếp.

Trước buổi thuyết trình, Giáo sư nhận được câu hỏi: với hai điểm dừng đỗ ~𝑠~ và ~𝑡~ cho trước, hãy chỉ ra một cách đi từ điểm ~𝑠~ đến điểm ~𝑡~ sao cho độ cao của phương tiện giao thông đi qua các tuyến đường theo cách đi đó là lớn nhất có thể. Nếu có nhiều cách đi, hãy chỉ cách đi có tổng chiều dài nhỏ nhất. Vì câu hỏi này quá dễ nên ông giao cho các học trò của mình trả lời, còn ông sẽ chỉ tập trung vào buổi thuyết trình.

## Dữ liệu vào:
- Dòng đầu ghi ~4~ số ~𝑛, 𝑚, s, t\ (𝑛 ≤ 10^5, 𝑚 ≤ 10^5, s, t ≤ 𝑛)~;
- ~𝑚~ dòng tiếp, mỗi dòng mô tả một đường nối hai điểm gồm ~4~ số ~𝑢, 𝑣, ℎ, 𝑑~: với ý nghĩa đường đi từ ~𝑢~ đến ~𝑣~ có độ cao tối đa là ~ℎ~ và chiều dài là ~𝑑~.

## Dữ liệu ra:
- Dòng đầu ghi số ~𝑘~ là số điểm dừng đỗ phải đi qua (kể cả ~𝑠~ và ~𝑡~);
- Dòng sau là ~𝑘~ số lần lượt là số hiệu các điểm dừng đỗ tương ứng theo thứ tự trên đường đi, bắt đầu là ~𝑠~ và kết thúc là ~𝑡~.

## Ví dụ:
#### Dữ liệu vào:
```
6 10 2 4
2 1 9 1
5 2 4 7
1 5 2 6
6 3 2 2
4 5 1 1
2 6 3 4
1 6 5 2
6 5 2 3
3 4 2 3
3 5 3 1
```

#### Dữ liệu ra:
```
5
2 1 6 3 4
```
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)