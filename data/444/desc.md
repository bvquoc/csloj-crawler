Hôm nay Bờm đến thăm nhà A Phủ, A Phủ ở nhà sàn, để lên nhà A Phủ phải đi bằng cầu thang. Cầu thang nhà A Phủ có ~N~ bậc, trong đó có ~K~ bậc đã bị mục nên không thể bước lên được (nhà A Phủ rất nghèo, từ ngày cấm trồng cây anh túc thì nhà A Phủ sống rất khó khăn). Chú ý: Bậc thứ ~N~ là sàn nhà A Phủ, bậc này không bị hỏng. Do đi đường mệt nên Bờm chỉ còn sức để có thể bước mỗi lần một hoặc tối đa hai bậc thang mà thôi. Vừa định bước lên cầu thang thì Bờm chợt nầy ra một câu hỏi: Có bao nhiêu cách bước từ sân lên nhà A Phủ? Các em hãy tính giúp Bờm nhé.

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên dương ~N~ và ~K~ cách nhau bởi một dấu cách;
- Dòng thứ hai chứa ~K~ số nguyên dương ~b_1, b_2, …, b_K~ là chỉ số các bậc thang bị hỏng, mỗi số cách nhau bởi một dấu cách.

## Dữ liệu ra:
- Một số nguyên duy nhất là số cách bước lên nhà A Phủ (do số cách có thể rất lớn nên ta chỉ lấy phần dư khi chia cho `1000000007`).

## Ví dụ:
#### Dữ liệu vào:
```
5 1
2
```

#### Dữ liệu ra:
```
2
```

#### Giải thích:
 <center><img src="/images/problems/444/DPSTEPS.png" width=400px></center>
<center>Cầu thang nhà A Phủ</center>

Bờm có thể bước như sau: ~1→3→4→5~ hoặc ~1→3→5~, do đó có 2 cách.

## Giới hạn:
- ~1 ≤ N ≤ 10^5; 0 ≤ K ≤ N; 1 ≤ b_i < N~.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)