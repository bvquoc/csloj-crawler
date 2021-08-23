**<center>Nguồn: Beginner Free Contest 8</center>**

Thuyền trưởng Roxana vừa nghĩ ra một trò chơi thể lực cho các thủy thủ của mình. Trên con tàu rộng lớn của mình, thuyền trưởng Roxana đã vẽ một đường tròn có đường kính $60$ mét. Sau khi vẽ xong, Roxana đã lấy $28$ điểm cách đều nhau trên đường tròn này. Ở điểm đầu tiên, Roxana đặt một chồng gồm các thẻ có chữ `A`. Ở điểm thứ hai, Roxana đặt một chồng gồm các thẻ có chữ `B`, và cứ tiếp tục như vậy cho đến điểm thứ $26$. Ở điểm thứ $27$, Roxana đặt một chồng gồm các thẻ trắng tượng trưng cho dấu cách, và ở điểm cuối cùng, Roxana đặt một chồng gồm các thẻ có dấu nháy đơn `’`.
<center><img src="inspire.png" width=500px></center>

Sau khi đặt xong các chồng thẻ, thuyền trưởng Roxana đưa cho các thủy thủ của anh mỗi người một tờ giấy chứa một câu nói truyền cảm hứng (gọi tắt là câu cảm hứng) bằng tiếng Anh hoặc tiếng Việt không dấu, ví dụ như `WINNING ISN’T EVERYTHING IT’S THE ONLY THING` (Chiến thắng không phải là tất cả, nó là thứ duy nhất). Lưu ý rằng trong các câu cảm hứng này, dấu `!` hay bất kì dấu câu nào khác ngoài dấu nháy đơn sẽ không xuất hiện. Mỗi thủy thủ sẽ nhận được một câu cảm hứng khác nhau.

Mỗi thủy thủ sẽ bắt đầu bài tập thể lực bằng cách đứng cạnh chổng thẻ có chữ cái đầu tiên trong câu cảm hứng của mình. Sau khi thuyền trưởng Roxana hô "Bắt đầu", các thủy thủ sẽ lấy tấm thẻ đầu tiên của mình và chạy xung quanh bên ngoài vòng tròn để thu thập các thẻ tiếp theo theo thứ tự xuất hiện trong câu cảm hứng mà mình được cho (các chữ cái không phân biệt in thường hay in hoa, tức chữ `a` và `A` cùng được tính là một chữ cái). Những thủy thủ thông minh sẽ chạy theo đường ngắn nhất có thể để tiết kiệm sức cho những thử thách tiếp theo của truyền trưởng Roxana.

Một thuyền phó sẽ ghi lại thời gian chạy của các thủy thủ cho truyền thưởng Roxana. Ban đầu, Roxana định cho toàn bộ thủy thủ của mình chạy cùng một lúc, nhưng do thấy trò chơi diễn ra với tốc độ quá cao, gây nguy hiểm cho những người chơi, anh quyết định chỉ để một thủy thủ chạy một cho đỡ nguy hiểm.

Thuyền trưởng Roxana muốn các thí sinh Free Contest viết chương trình tính xem các thủy thủ thông minh sẽ hoàn thành phần chơi của mình trong thời gian bao nhiêu giây. Biết rằng mỗi thủy thủ có tốc độ chạy $15$ mét trên giây và thời gian mỗi thủy thủ dùng để lấy một tấm thẻ là $1$ giây.

## Dữ liệu vào:
- Dòng đầu tiên gồm một số nguyên dương $n$ $(1 ≤ n ≤ 20)$ là số thủy thủ tham gia vào trò chơi thể lực và cũng đồng thời là số câu cảm hứng.
- $n$ dòng tiếp theo, mỗi dòng gồm một câu cảm hứng. Dữ liệu vào đảm bảo các câu cảm hứng chỉ chứa các chữ cái tiếng Anh in thường hoặc in hoa, dấu  cách và dấu nháy đơn. Mỗi câu cảm hứng sẽ có độ dài từ $8$ đến $120$ kí tự.

## Dữ liệu ra:
- Gồm $n$ dòng, dòng thứ $i$ gồm một số thực được làm tròn đến đúng $4$ chữ số sau dấu phẩy thập phân là thời gian một thủy thủ thông minh có thể  hoàn thành phần chơi của mình với câu cảm hứng thứ $i$.

## Ví dụ:
### Dữ liệu vào:
```
3
WINNING ISN’T EVERYTHING IT’S THE ONLY THING
WINNERS DON’T WAIT FOR CHANCES THEY TAKE THEM
PAIN IS ONLY TEMPORARY BUT VICTORY IS FOREVER
```

## Dữ liệu ra:
```
191.6157
192.4109
193.1037
```