**<center>Nguồn: Ôn HN tháng 11/2016, Thầy Lê Minh Hoàng, Ngày 1</center>**

Tương truyền rằng Josephus và ~40~ chiến sĩ bị người La Mã bao vây trong một hang động. Họ quyết định tự vẫn chứ không chịu bị bắt. ~41~ chiến sĩ đứng thành vòng tròn và bắt đầu đếm theo một chiều vòng tròn, cứ người nào đếm đến ~3~ thì phải tự vẫn và người kế tiếp bắt đầu đếm lại từ ~1~. Josephus không muốn chết và đã chọn được một vị trí mà ông ta cùng với một người nữa là hai người sống sót cuối cùng theo luật này. Hai người sống sót sau đó đã đầu hàng và gia nhập quân La Mã (Josephus sau đó chỉ nói rằng đó là sự may mắn, hay “bàn tay của Chúa” mới giúp ông và người kia sống sót)…

Có rất nhiều truyền thuyết và tên gọi khác nhau về bài toán Josephus, trong toán học người ta phát biểu bài toán dưới dạng một trò chơi: Cho ~𝑛~ người đứng quanh vòng tròn theo chiều kim đồng hồ đánh số từ ~0~ tới ~𝑛 − 1~. Từ một người xác định trước, họ bắt đầu đếm từ ~1~, người nào đếm đến ~𝑚~ thì bị loại khỏi vòng và người kế tiếp bắt đầu đếm lại từ ~1~. Trò chơi tiếp diễn cho tới khi vòng tròn chỉ còn lại ~1~ người.

**Yêu cầu:**
- Cho ~𝑝~ là số hiệu người đếm đầu tiên, tìm ~𝑞~ là số hiệu người cuối cùng còn lại trên vòng tròn;
- Cho ~𝑦~ là số hiệu người cuối cùng còn lại trên vòng tròn, tìm ~𝑥~ là số hiệu người đếm đầu tiên theo luật chơi;

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên dương ~𝑛, 𝑚 ≤ 10^7~;
- Dòng sau chứa hai số nguyên dương ~𝑝, 𝑦\ (0 ≤ 𝑝, 𝑦 < 𝑛)~.

## Dữ liệu ra:
- Ghi ra một dòng chứa hai số ~𝑞, 𝑥~ tìm được.

## Ví dụ:
#### Dữ liệu vào:
```
7 3
0 2
```

#### Dữ liệu ra:
```
3 6
```
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)