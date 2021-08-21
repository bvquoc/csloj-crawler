**<center>(Đề đề xuất DHBB 2017 của THPT CHUYÊN HƯNG YÊN)</center>**

Alice và Bob chơi trò bốc xu từ một đống có ~N~ đồng xu. Hai bạn chọn hai số nguyên dương khác nhau ~K~ và ~L~. Hai người lần lượt đi. Alice đi trước. Mỗi người, khi đến lượt mình, được bốc từ đống đó ~1, K~ hoặc ~L~ xu (Nếu không còn đủ ~L~ hoặc ~K~ đồng xu thì chỉ được bốc ~1~ đồng). Ai bốc được đồng xu (hoặc các đồng xu) cuối cùng là thắng. Sau rất nhiều lần chơi, Alice nhận thấy rằng có những trường hợp mình chắc chắn thắng không phụ thuộc vào cách đi của Bob, ngược lại, có trường hợp dù đi thế nào Bob vẫn thắng (nếu Bob đi tối ưu). Trước ván chơi mới Alice nóng lòng muốn biết mình có thắng được hay không.

Cho trước các số ~N, K, L~. Hãy xác định Alice hay Bob sẽ thắng nếu cả hai cùng đi tối ưu.

## Dữ liệu vào:
- Dòng đầu chứa số nguyên ~T, K, L~ với ~T~ là số bộ test.
- Dòng tiếp theo chứa ~T~ số nguyên dương lần lượt là số đồng xu từ đống ban đầu trong mỗi test.

## Dữ liệu ra:
- Một xâu có độ dài ~T~, trong đó ký tự thứ ~i~ là `A` nếu với test ~i~, Alice thắng, ngược lại, là `B` nếu Bob thắng.

## Ví dụ:
#### Dữ liệu vào:
```
3 2 3
3 4 7
```

#### Dữ liệu ra:
```
ABA
```

## Giới hạn:
- ~1 ≤ T ≤ 10^4; 1 ≤ N, K, L ≤ 10^6~.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)